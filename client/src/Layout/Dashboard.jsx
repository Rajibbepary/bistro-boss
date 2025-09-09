import { Link, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";
import UserNavbar from "../pages/UserHome/UserNavbar";
import AdminSidebar from "../pages/AdminHome/AdminSidebar";
import useAdmin from "../hooks/useAdmin";
import { useContext } from 'react';
import { AuthContext } from './../providers/AuthProviders';

const Dashboard = () => {

    const [isAdmin] = useAdmin()
   const {user} = useContext(AuthContext);

    console.log(user);
    
    return (
        <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
                <Link to='/'>
                    <img className="h-9" src={assets.logo}/>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! {user?.displayName}</p>
                    <div className=" border-2 rounded-full border-green-600">
                         <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                  className='w-10 h-10 object-cover rounded-full'
                />
                    </div>
                    {/* <button className='border rounded-full text-sm px-4 py-1'>Logout</button> */}
                </div>
            </div>

            <div className="flex">
           {
            isAdmin ? <>
            <AdminSidebar/>
            </> : <>
             <UserNavbar/>
            </>
           }

            <Outlet>

            </Outlet>
            </div>
        </>
    );
};

export default Dashboard;