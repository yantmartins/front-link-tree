import { Outlet } from "react-router-dom";
import { NavBar } from "./../components/NavBar";

export function DashboardArea() {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </>

    )
}