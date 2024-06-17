import { RentSearchResponse } from "@/types"
import { useQuery } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useSearchRents = (city?: string) =>{
    const createSearchRequest = async ():Promise<RentSearchResponse> =>{
        const response = await fetch (`${API_BASE_URL}/api/rent/search/${city}`)
        if(!response.ok){
            throw new Error("Failed to get rent")
        }
        return response.json()
    }
    const {data:results, isLoading} = useQuery(["search rents",city],

        createSearchRequest,
        {enabled: !!city}
    )
    return{
        results,
        isLoading,
        
    }

}