import { Order, Rent } from "@/types"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery } from "react-query"
import { toast } from "sonner"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useGetMyRent = () => {
  const { getAccessTokenSilently } = useAuth0()

  
  const getMyRentRequest = async (): Promise<Rent> => {
    const accessToken = await getAccessTokenSilently()
    const response = await fetch (`${API_BASE_URL}/api/my/rent`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to get rent")
    }
    return response.json()
  }

  const { data: rent, isLoading } = useQuery<Rent>("fetchMyRent", getMyRentRequest)

  return { rent, isLoading }
}

export const useCreateMyRent = () => {
    const {getAccessTokenSilently} = useAuth0()
    const createMyRentRequest= async(rentFormData:FormData): Promise<Rent> =>{
        const accessToken= await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/my/rent`,{
            method:'POST',
            headers:{
                'Authorization':`Bearer ${accessToken}`,
            },
            body:rentFormData
        })
        if (!response.ok){
            throw new Error("failed to create rent")
        }
        return response.json()

    }
    const{mutate:createRent, 
        isLoading,
        isSuccess,
        error,
      } = useMutation(createMyRentRequest);

      if (isSuccess) {
        toast.success("Rent created!");
      }
      if (error) {
        toast.error("Unable to update rent");
      }
      return{createRent,isLoading}
    }
    export const useUpdateMyRent = () =>{
        const {getAccessTokenSilently} = useAuth0()
        const updateRentRequest = async (rentFormData:FormData):Promise<Rent> =>{
          const accessToken = await getAccessTokenSilently()

          const response = await fetch(`${API_BASE_URL}/api/my/rent`,{
            method:"PUT",
            headers:{
              'Authorization':`Bearer ${accessToken}`
            },
            body:rentFormData,


          })
          if (!response){
            throw new Error("Failed to update rent")

          }
          return response.json()


        }
        const {mutate:updateRent,isLoading,error,isSuccess} =useMutation(updateRentRequest)
        if(isSuccess){
          toast.success("Rent updated successfully")
        }
        if(error){
          toast.error("unable to update rent")
        }
        return{updateRent,isLoading}

    }
    export const useGetMyRentOrders = () => {
      const { getAccessTokenSilently } = useAuth0();
    
      const getMyRentOrdersRequest = async (): Promise<Order[]> => {
        const accessToken = await getAccessTokenSilently();
    
        const response = await fetch(`${API_BASE_URL}/api/my/rent/order`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });
    
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
    
        return response.json();
      };
    
      const { data: orders, isLoading } = useQuery(
        "fetchMyRentOrders",
        getMyRentOrdersRequest
      );
    
      return { orders, isLoading };
    };

    type UpdateOrderStatusRequest = {
      orderId: string;
      status: string;
    };
    export const useUpdateMyRentOrder = () => {
      const { getAccessTokenSilently } = useAuth0();
    
      const updateMyRentOrder = async (
        updateStatusOrderRequest: UpdateOrderStatusRequest
      ) => {
        const accessToken = await getAccessTokenSilently();
    
        const response = await fetch(
          `${API_BASE_URL}/api/my/rent/order/${updateStatusOrderRequest.orderId}/status`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: updateStatusOrderRequest.status }),
          }
        );
    
        if (!response.ok) {
          throw new Error("Failed to update status");
        }
    
        return response.json();
      };
    
      const {
        mutateAsync: updateRentStatus,
        isLoading,
        isError,
        isSuccess,
        reset,
      } = useMutation(updateMyRentOrder);
    
      if (isSuccess) {
        toast.success("Order updated");
      }
    
      if (isError) {
        toast.error("Unable to update order");
        reset();
      }
    
      return { updateRentStatus, isLoading };
    };