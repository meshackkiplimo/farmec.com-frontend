import { useCreateMyRent, useGetMyRent, useGetMyRentOrders } from "@/api/MyRentApi";
import ManageRentForm from "@/forms/manage-rent-form/ManageRentForm";
import { useUpdateMyRent } from './../api/MyRentApi';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItemCard from "@/components/OrderItemCard";

const ManageRentPage = () => {
  const {createRent,isLoading:isCreateLoading} = useCreateMyRent()
  const {rent} = useGetMyRent()
  const {updateRent,isLoading:isUpdateLoading} = useUpdateMyRent()

  const { orders } = useGetMyRentOrders();


  const isEditing  = !!rent
  return(
    <Tabs defaultValue="orders">
    <TabsList>
      <TabsTrigger value="orders">Orders</TabsTrigger>
      <TabsTrigger value="manage-rent">Manage Rent</TabsTrigger>
    </TabsList>
    <TabsContent
      value="orders"
      className="space-y-5 bg-gray-50 p-10 rounded-lg"
    >
      <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
      {orders?.map((order) => (
        <OrderItemCard order={order} />
      ))}
    </TabsContent>
    <TabsContent value="manage-restaurant">
      <ManageRentForm
        rent={rent}
        onSave={isEditing ? updateRent : createRent}
        isLoading={isCreateLoading || isUpdateLoading}
      />
    </TabsContent>
  </Tabs>

   
  )
}

export default ManageRentPage;