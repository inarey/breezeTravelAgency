import { Outlet } from "react-router-dom" //to show currently selected page
import Navbar from "../components/header/Navbar"

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default Root