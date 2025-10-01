import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const main = () => {
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}

export default main