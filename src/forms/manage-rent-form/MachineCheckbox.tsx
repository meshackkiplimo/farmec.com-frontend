import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  machine:string
  field:ControllerRenderProps<FieldValues, "machines">
}

const MachineCheckbox = ({machine,field}: Props) => {

    return(
        <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
            <FormControl>
                <Checkbox 
                className="bg-white"  
                checked={field.value.includes(machine )}  
                onCheckedChange = {(checked)=>{
                    if(checked){
                        field.onChange([...field.value,machine])
                    }else{
                        field.onChange(
                            field.value.filter((value: string) => value !== machine)
                        ) 
                    }
                    
                }} />
                
            </FormControl>
            <FormLabel className="text-sm font-normal">
                {machine}
                
            </FormLabel>

        </FormItem>
    )
  
}

export default MachineCheckbox;