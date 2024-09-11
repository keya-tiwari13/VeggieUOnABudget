import {Link, useLocation} from "react-router-dom"

import { useState } from "react"
import Sidebar from "./sidebar"

export default function Navbar(){
    const [showSidebar, setshowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "home",
            path: "/"
        },
        {
            name: "recipes",
            path:"/recipes"
        },
        {
            name:"about me",
            path:"/aboutme"
        }
    ]

    function closeSidebar(){
        setshowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
            <Link to="/"  className="logo">Veggie<span>U</span>OnABudget</Link>
            <div className="nav-links">
                { links.map(link => (
                    <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                )) }
            </div>
            <div onClick={() => setshowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        { showSidebar && <Sidebar close={closeSidebar} links={links} />}
        </>
    )
}