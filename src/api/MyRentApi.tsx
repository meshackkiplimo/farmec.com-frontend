import { Rent } from "@/types"
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation } from "react-query"
import { toast } from "sonner"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

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
