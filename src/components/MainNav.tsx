import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex-space-x-2 items-center">

      {isAuthenticated ? (
        <div className="flex flex-row">
          <div className="mr-4">
            <NavLink to="/services" className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">Services</NavLink>
          </div>
          <div className="mr-4">
            <NavLink to="/about" className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300">About</NavLink>
          </div>
          <UsernameMenu />
        </div>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-green-500 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log in

        </Button>
      )
      }
    </span >

  )
}

export default MainNav;