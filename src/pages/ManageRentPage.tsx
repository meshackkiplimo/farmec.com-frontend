import { useCreateMyRent, useGetMyRent } from "@/api/MyRentApi";
import ManageRentForm from "@/forms/manage-rent-form/ManageRentForm";

const ManageRentPage = () => {
  const {createRent,isLoading} = useCreateMyRent()
  const {rent} = useGetMyRent()
  return(
    <ManageRentForm 
     rent={rent}
     onSave={createRent}
       isLoading={isLoading}
      />
  )
}

export default ManageRentPage;