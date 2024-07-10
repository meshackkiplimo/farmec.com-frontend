import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import CategoryItemInput from "./CategoryItemInput";

const CategorySection = () => {
  const {control} =  useFormContext()
  const {fields,append,remove} = useFieldArray({
    control,
    name: "categoryItems"
  })
  return(
    <div className="space-y-2">

        <div>
            <h2 text-2xl font-bold>Category</h2>
            <FormDescription>

                create your category and give each machine  a price
            </FormDescription>
        </div>
        <FormField control={control} name="CategoryItems" render={() =>(
            <FormItem className="flex flex-col gap-2" >
                {fields.map((_,index)=>(
                    <CategoryItemInput
                    
                    index={index}
                     removeCategoryItem={()=> remove(index)} />


                ))}


            </FormItem>
        )} />
        <Button type="button" onClick={()=>append({
            name: "",
            price:""
        })}>
         Add Category Item
        </Button>
    </div>
  )
}

export default CategorySection;