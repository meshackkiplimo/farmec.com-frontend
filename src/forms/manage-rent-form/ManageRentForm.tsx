import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import MachinesSection from "./MachinesSection";
import CategorySection from "./CategorySection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { Rent } from "@/types";
import { useEffect } from "react";

const formSchema = z
  .object({
    rentName: z.string({
      required_error: "rent name is required",
    }),
    town: z.string({
      required_error: "town is required",
    }),
    county: z.string({
      required_error: "county is required",
    }),
    deliveryPrice: z.coerce.number({
      required_error: "delivery price is required",
      invalid_type_error: "must be a valid number",
    }),
    estimatedDeliveryTime: z.coerce.number({
      required_error: "estimated delivery time is required",
      invalid_type_error: "must be a valid number",
    }),
    machines: z.array(z.string()).nonempty({
      message: "please select at least one item",
    }),
    categoryItems: z.array(
      z.object({
        name: z.string().min(1, "name is required"),
        price: z.coerce.number().min(1, "price is required"),
      })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
  });

type RentFormData = z.infer<typeof formSchema>;

type Props = {
  rent?: Rent;
  onSave: (rentFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRentForm = ({ onSave, isLoading, rent }: Props) => {
  const form = useForm<RentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      machines: [],
      categoryItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!rent) {
      return;
    }

  
    const deliveryPriceFormatted = parseInt(
      (rent.deliveryPrice / 100).toFixed(2)
    );

    const categoryItemsFormatted = rent.categoryItems.map((item) => ({
      ...item,
      price: parseInt((item.price / 100).toFixed(2)),
    }));

    const updatedRent = {
      ...rent,
      deliveryPrice: deliveryPriceFormatted,
      categoryItems: categoryItemsFormatted,
    };

    form.reset(updatedRent);
  }, [form, rent]);

  const onSubmit = (formDataJson: RentFormData) => {
    const formData = new FormData();

    formData.append("rentName", formDataJson.rentName);
    formData.append("town", formDataJson.town);
    formData.append("county", formDataJson.county);

    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.machines.forEach((machine, index) => {
      formData.append(`machines[${index}]`, machine);
    });
    formDataJson.categoryItems.forEach((categoryItem, index) => {
      formData.append(`categoryItems[${index}][name]`, categoryItem.name);
      formData.append(
        `categoryItems[${index}][price]`,
        (categoryItem.price * 100).toString()
      );
    });

    if (formDataJson.imageFile) {
      formData.append(`imageFile`, formDataJson.imageFile);
    }

    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <MachinesSection />
        <Separator />
        <CategorySection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRentForm;
