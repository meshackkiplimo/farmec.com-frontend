import { useGetRent } from "@/api/RentApi";
import CategoryItem from "@/components/CategoryItem";
import OrderSummary from "@/components/OrderSummary";

import RentInfo from "@/components/RentInfo";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryItem as CategoryItemType } from "../types";


export type CartItem = {
  
  _id: string;
  name: string;
  price: number;
  quantity: number;

}

const DetailPage = () => {
  const {rentId} = useParams()
  const {rent,isLoading} = useGetRent(rentId)
  const [cartItems,setCartItems]= useState<CartItem[]>([]);
  const addToCart = (categoryItem: CategoryItemType) => {
    setCartItems((prevCartItems) => {
     
      const existingCartItem = prevCartItems.find(
        (cartItem) => cartItem._id === categoryItem._id);
      let updatedCartItems;
      if(existingCartItem){
        updatedCartItems = prevCartItems.map((cartItem)=>
          cartItem._id === categoryItem._id 
        ?{...cartItem,quantity:cartItem.quantity+1}
        :cartItem)
      }else{
        updatedCartItems = [
          ...prevCartItems,
          {
            _id:categoryItem._id,
            name:categoryItem.name,
            price:categoryItem.price,
            quantity:1,
          
          }]

      }

           return updatedCartItems

    })

  }

  
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
                    <CategoryItem  categoryItem={categoryItem}   addToCart ={()=>addToCart(categoryItem) } />


                ))}


            </div>
            <div>

              <Card>
                <OrderSummary rent={rent} cartItems={cartItems} />

                
              </Card>
            </div>
        </div>
    </div>
  )

}

export default DetailPage;