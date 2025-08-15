import { Link, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";
import UserNavbar from "../pages/UserHome/UserNavbar";

const Dashboard = () => {

   
    
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <Link to='/'>
                    <img className="h-9" src={assets.logo}/>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>

            <div className="flex">
            <UserNavbar/>
            <Outlet>

            </Outlet>
            </div>
        </>
    );
};

export default Dashboard;