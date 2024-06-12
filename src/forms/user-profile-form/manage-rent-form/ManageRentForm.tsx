import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import DetailsSection from "./DetailsSection"
import { Separator } from "@/components/ui/separator"
import MachinesSection from "./MachinesSection"
import CategorySection from "./CategorySection"
import ImageSection from "./ImageSection"
import LoadingButton from "@/components/LoadingButton"
import { Button } from "@/components/ui/button"


const formSchema = z.object({
    rentName:z.string({
        required_error: "Name is required",
    }),
    city:z.string({
        required_error: "city is required",
    }),
    country:z.string({
        required_error: "country is required",
    }),
    deliveryPrice:z.coerce.number({
        required_error: "delivery price  is required",
        invalid_type_error: "must be a valid number"
    }),
    estimatedDeliveryTime:z.coerce.number({
        required_error: "delivery time  is required",
        invalid_type_error:"must be a valid number"
    }),
    machines:z.array(z.string()).nonempty({
        message:"please select at least one item"
    }),
    categoryItems:z.array(
        z.object({
        name:z.string().min(1,"name is required"),
        price:z.coerce.number().min(1,"price is required"),
    })),
    imageUrl:z.string().optional(),
    imageFile:z.instanceof(File,{message:"image is required"}).optional()
})
 type RentFormData =z.infer<typeof formSchema>
type Props = {
  onSave: (rentFormData:FormData)=> void
  isLoading: boolean
}

const ManageRentForm = ({onSave,isLoading}: Props) => {
    const form = useForm<RentFormData>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            machines:[],
            categoryItems:[{name:"", price:0}],
        },

    });
   
    
    const onSubmit =(formDataJson: RentFormData) =>{
        const formData= new FormData()
        formData.append("rentName",formDataJson.rentName)
        formData.append("city",formDataJson.city)
        formData.append("country",formDataJson.country)
        
        formData.append("deliveryPrice",(formDataJson.deliveryPrice * 100).toString())

        formData.append("estimatedDeliveryTime",formDataJson.estimatedDeliveryTime.toString())
        formDataJson.machines.forEach((machine,index)=>{
            formData.append(`machines[${index}]`,machine)

        })
        formDataJson.categoryItems.forEach((categoryItem,index)=>{
            formData.append(`categoryItems[${index}][name]`,categoryItem.name)
            formData.append(`categoryItems[${index}][name]`,(categoryItem.price*100).toString())


        })
        if(formDataJson.imageFile) {
        formData.append(`imageFile`,formDataJson.imageFile)
        }

        onSave(formData)

    }
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection/>
                <Separator/>
                <MachinesSection/>
                <Separator/>
                <CategorySection/>
                <Separator/>
                <ImageSection/>
                
                
            </form>
            {isLoading ? <LoadingButton/> : <Button type="submit">Submit</Button>}
        </Form>
    )
  
}

export default ManageRentForm;