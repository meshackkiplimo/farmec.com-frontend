import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const {control} = useFormContext()
  return(
    <div className="space-y-2  bg-gray-100" >
      <div>

        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription>

            Enter the details about your rent
        </FormDescription>
      </div>
      <FormField control={control} name="rentName" render={({ field })=>(
      <FormItem>
         <FormLabel>Name Of your EnterPrise</FormLabel>
         <FormControl>
            <Input {...field} className="bg-white" />
         </FormControl>
         <FormMessage/>


      </FormItem>)} />

      
      <FormField control={control} name="town" render={({ field })=>(
      <FormItem className="flex-1">
         <FormLabel>town</FormLabel>
         <FormControl>
            <Input {...field} className="bg-white" />
         </FormControl>

         <FormMessage/>
      </FormItem>)} />
      <FormField control={control} name="county" render={({ field })=>(
      <FormItem className="flex-1">
         <FormLabel>County</FormLabel>
         <FormControl>
            <Input {...field} className="bg-white" />
         </FormControl>
         <FormMessage/>

      </FormItem>)} />

     

      <FormField control={control} name="deliveryPrice" render={({ field })=>(
      <FormItem className="max-w-[25%]">
         <FormLabel>Delivery Price(kes)</FormLabel>
         <FormControl>
            <Input {...field} className="bg-white" placeholder="1.50" />
         </FormControl>
         <FormMessage/>

      </FormItem>)} />
      <FormField control={control} name="estimatedDeliveryTime" render={({ field })=>(
      <FormItem className="max-w-[25%]">
         <FormLabel>Estimated Delivery Time(minutes)</FormLabel>
         <FormControl>
            <Input {...field} className="bg-white" placeholder="30" />
         </FormControl>
         <FormMessage/>

      </FormItem>)} />

    </div>
  )
}

export default DetailsSection;