import { useCreateMyRent, useGetMyRent } from "@/api/MyRentApi";
import ManageRentForm from "@/forms/manage-rent-form/ManageRentForm";
import { useUpdateMyRent } from './../api/MyRentApi';

const ManageRentPage = () => {
  const {createRent,isLoading:isCreateLoading} = useCreateMyRent()
  const {rent} = useGetMyRent()
  const {updateRent,isLoading:isUpdateLoading} = useUpdateMyRent()
  const isEditing  = !!rent
  return(
    <ManageRentForm 
     rent={rent}
     onSave={isEditing ? updateRent:createRent}
       isLoading={isCreateLoading || isUpdateLoading}
      />
  )
}

export default ManageRentPage;