import { SearchState } from "@/pages/SearchPage"
import { RentSearchResponse } from "@/types"
import { useQuery } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useSearchRents = (searchState: SearchState, city?: string) =>{
    const createSearchRequest = async ():Promise<RentSearchResponse> =>{
        const params = new URLSearchParams();
        params.set("searchQuery", searchState. searchQuery)
        params.set("page",  searchState.page.toString())
        params.set("selectedMachines",searchState.selectedMachines.join(","))
        const response = await fetch (`${API_BASE_URL}/api/rent/search/${city}?${params.toString()}`)
        if(!response.ok){
            throw new Error("Failed to get rent")
        }
        return response.json()
    }
    const {data:results, isLoading} = useQuery(
        ["searchRents",searchState],

        createSearchRequest,
        {enabled: !!city}
    )
    return{
        results,
        isLoading,
        
    }

}