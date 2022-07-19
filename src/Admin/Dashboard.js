import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Layouts from "../components/Layouts"
import Footer from "../pages/Footer"
import AdminNavbar from "./AdminNavbar"

const Dashboard = (props) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>


            <AdminNavbar handleClick={handleClick} />
            <Layouts showFooter={false} showHeader={false}>

                <div>

                    <div className={`pt-52 ${open ? 'page-sidebar' : 'page-sidebar open'}`}>
                        <li><Link to="user">user</Link></li>
                        <li><Link to="product">products</Link></li>
                        <li><Link to="profile">profile</Link></li>
                        <li><Link to="reports">reports</Link></li>
                        <li><Link to="seles">seles</Link></li>
                        <li><Link to="vendor">vendor</Link></li>
                        <li><Link to="user">user</Link></li>
                    </div>
                    <div className={`${open ? 'mybody-open' : 'mybody-close'}`}>
                        <Outlet />
                    </div>
                </div>


            </Layouts>
        </>
    )
}

export default Dashboard