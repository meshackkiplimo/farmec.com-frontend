import { Rent } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
  rent:Rent
}

const RentInfo = ({rent}: Props) => {

    return(
        <Card className="border-sla" >

            <CardHeader>

                <CardTitle className="text-3xl font-bold tracking-tight" >


                    {rent.rentName}
               </CardTitle>
               <CardDescription>
                {rent.city},{rent.county}
               </CardDescription>
            </CardHeader>
            <CardContent className="flex">
                {rent.machines.map((item,index)=>(

                    <span className="flex"  >

                        <span>{item}</span>

                        {index < rent.machines.length -1 && <Dot/> }

                    </span>
                ))}

                
            </CardContent>


            
        </Card>
    )
  
}

export default RentInfo;