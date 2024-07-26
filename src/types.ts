export type User ={
    _id:string
    email:string
    firstName:string
    lastName:string
    address:string
    town:string
    county:string
    phoneNumber:string
}
export type CategoryItem = {
    _id: string;
    name: string;
    price: number;
  };

export type Rent = {
    _id: string;
    user: string;
    rentName: string;
    town: string;
    county: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    machines: string[];
    categoryItems: CategoryItem[];
    imageUrl: string;
    lastUpdated: string;
  };


  export type OrderStatus =
  | "placed"
  | "paid"
  | "inProgress"
  | "outForDelivery"
  | "delivered";

  
export type Order = {
  _id: string;
  rent: Rent;
  user: User;
  cartItems: {
    categoryItemId: string;
    name: string;
    quantity: string;
  }[];
  deliveryDetails: {
    firstName: string;
    lastName: string;
    address: string;
    town: string;
    email: string;
    county: string;
    phoneNumber: string;
  };
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  rentId: string;
};

  export type RentSearchResponse = {
    data: Rent[];
    pagination: {
      total: number;
      page: number;
      pages: number;
    };
  };
 