import { Link, Outlet } from "react-router-dom";

export default function About()
{
    return(
        <>
        <h1>ABOUT</h1>
        <nav>
            <Link to={'/about/about1'}>About1</Link>
            <Link to={'/about/about2'}>About2</Link>
        </nav>
        <Outlet></Outlet>
        </>
    )
}