import { BrowserRouter, Link, Outlet, Route, Routes, } from "react-router-dom"
import styles from "./home.module.css"
import Home1 from "./Home1"
import Home2 from "./Home2"
export default function Home() {
    return <>
        <h1>Home</h1>
        <nav>
            <Link to={'/home/home1'}>Home1</Link>
            <Link to={'/home/home2'}>Home2</Link>
        </nav>
        <Outlet></Outlet>
        <p>bottem</p>


    </>


}