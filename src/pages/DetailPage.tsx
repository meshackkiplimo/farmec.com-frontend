import { useGetRent } from "@/api/RentApi";
import CategoryItem from "@/components/CategoryItem";

import RentInfo from "@/components/RentInfo";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const {rentId} = useParams()
  const {rent,isLoading} = useGetRent(rentId)
  
  if(isLoading || !rent){
    return "Loading ..."
  }


  return(
    <div className="flex flex-col gap-10" >

        <AspectRatio ratio={16 / 5}>
        <img src={rent.imageUrl}
         className="rounded-md object-cover h-full w-full" />


        </AspectRatio>
        <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32  ">


            <div className="flex flex-col gap-4" >

                <RentInfo rent={rent} />
                
                <span  className="text-2xl font-bold tracking-tight" >Menu</span>
                {rent.categoryItems.map((categoryItem)=>(
                    <CategoryItem  categoryItem={categoryItem}  />


                ))}

            </div>
        </div>
    </div>
  )

}

export default DetailPage;