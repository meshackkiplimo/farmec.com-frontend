import { useCreateMyRent } from "@/api/MyRentApi";
import ManageRentForm from "@/forms/user-profile-form/manage-rent-form/ManageRentForm";

const ManageRentPage = () => {
  const {createRent,isLoading} = useCreateMyRent()
  return(
    <ManageRentForm  onSave={createRent} isLoading={isLoading} />
  )
}

export default ManageRentPage;