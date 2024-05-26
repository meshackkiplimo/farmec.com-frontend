import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import DetailsSection from "./DetailsSection"
import { useForm } from "react-hook-form"

const formSchema =  z.object({
    rentName:z.string({
        required_error:"rent name is required",
    }),

    city:z.string({
            required_error:"city name is required",
        }),   
    
        country:z.string({
            required_error:"country name is required",
        }),   
        deliveryPrice:z.coerce.number({

            required_error:"delivery price is required",
            invalid_type_error:"must be a valid number"
        }) ,
       estimatedDeliveryTime:z.coerce.number({

            required_error:" estimated delivery  is time is required",
            invalid_type_error:"must be a valid number"
        }) ,
        machines:z.array(z.string()).nonempty({
            message:"please select at least one item"
        }),
        categoryItems:z.array(z.object({
            name:z.string().min(1,"name is required"),
            price:z.coerce.number().min(1,"price is required")


        })),
     ImageFile:z.instanceof(File,{message:"image is required"})
    

})

type RentFormData =z.infer<typeof formSchema>


type Props = {
    onSave:(rentFormData: FormData) => void
    isLoading:boolean

  
}

const ManageRentForm = ({onSave, isLoading}: Props) => {
    const form =useForm<RentFormData>({

        resolver:zodResolver(formSchema),
        defaultValues:{
            machines:[],
            categoryItems:[{name: "", price:0}],
            
        }, 
       
    })
    const onSubmit = (formDataJson: RentFormData)=> {
      



            
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection/>




            </form>
        </Form>
    )
  
}

export default ManageRentForm;