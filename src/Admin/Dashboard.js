import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import Layouts from "../components/Layouts"
import Footer from "../pages/Footer"
import AdminNavbar from "./AdminNavbar"
import MainAdmin from "./mainAdmin/MainAdmin"
import AdminLayout from "./AdminLayout"

const Dashboard = (props) => {
    const [open, setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <>


            <AdminNavbar handleClick={handleClick} />
            <Layouts showFooter={false} showHeader={false}>

                <div>

                    <div className={`pt-12 scroll-m-2 overflow-y-auto overflow-x-hidden ${open ? 'page-sidebar' : 'page-sidebar open'}`}>
                        <ul class="menu p-4  w-80 bg-base-100 text-base-content">

                            <li>
                                <span>
                                    <i class="fa-solid fa-house-user"></i>
                                    <Link to="dashboard">dashboard</Link>
                                </span>
                            </li>
                            <div class="collapse text-left">
                                <input type="checkbox" />
                                <div class="collapse-title  flex justify-between">
                                    <div>
                                        <i class="fa-solid fa-sack-dollar"></i>
                                        <span className="pl-3">Products</span>
                                    </div>
                                    <div>

                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <div class="collapse-content ">

                                    <li ><Link to="catagories">Catagories</Link></li>
                                    <li ><Link to="subcatagories">Sub Catagories</Link></li>
                                    <li ><Link to="addproduct">Add Products</Link></li>
                                    <li ><Link to="productList">Products List</Link></li>

                                </div>
                            </div>



                            <li>
                                <span>
                                    <i class="fa-solid fa-user"></i>
                                    <Link to="profile">profile</Link>

                                </span>
                            </li>
                            <li>
                                <span>
                                    <i class="fa-solid fa-signal"></i>
                                    <Link to="reports">reports</Link>
                                </span>

                            </li>
                            <div class="collapse text-left">
                                <input type="checkbox" class="" />
                                <div class="collapse-title  flex justify-between">
                                    <div>
                                        <i class="fa-solid fa-sack-dollar"></i>
                                        <span className="pl-3">seles</span>

                                    </div>
                                    <div>

                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                                <div class="collapse-content ">

                                    <li><Link to="seles/order">order</Link></li>
                                    <li><Link to="seles">transection</Link></li>

                                </div>
                            </div>




                            <li>
                                <span>
                                    <i class="fa-solid fa-user-group"></i>
                                    <Link to="vendor">vendor</Link>
                                </span>


                            </li>
                            <li>
                                <span>
                                <i class="fa-solid fa-users"></i>
                                    <Link to="user">user</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className={` ${open ? 'mybody-open' : 'mybody-close'}`}>

                        <h2 className="pt-20 text-3xl font-bold">Welcome to admin dashboard</h2>


                        {/* <MainAdmin /> */}
                        <Outlet />

                    </div>
                </div>


            </Layouts>
        </>
    )
}

export default Dashboard