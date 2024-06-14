import { useFormContext } from "react-hook-form";
import { FormDescription, FormItem, FormMessage } from '@/components/ui/form';
import { FormField } from '@/components/ui/form';
import { machineList } from "@/config/rent-options-config";
import MachineCheckbox from "./MachineCheckbox";

const MachinesSection = () => {
  const {control} = useFormContext()

  return(
    <div className="space-y-2">
        <div>
            <h2 className="text-2xl font-bold">Machines</h2>
            <FormDescription>

                Select the machines that are available
            </FormDescription>
        </div>

        <FormField  control={control} name="machines" render={({field})=>(
            
            <FormItem>
              
              <div className="grid md:grid-cols-5 gap-1">{machineList.map((machineItem)=>(
                <MachineCheckbox machine={machineItem} field={field} />
              ))}
              </div>
              <FormMessage/>
                
            </FormItem>


        )} />

    </div>
  )
}

export default MachinesSection;