
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from '../../../assets/home/logo.png'
const Navbar = () => {

  const location = useLocation();
const [open, setOpen] = useState(false)
const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Contact Us", path: "/contact" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Our Menu", path: "/our-menu" },
    { name: "Our Shop", path: "/order/salad" },
]


  return (
  <div className="fixed w-full z-10 bg-black/30 ">

      <div 
    className={`flex items-center justify-between px-4 md:px-12 lg:px-12 xl:px-24 py-4 text-[#FFFFFF] relative transition-all ${location.pathname ==='/' && 'bg-light' }`}>
        <Link to='/'>
          <img src={logo} className="w-10 max-sm:hidden h-10 object-cover" alt=""  />
            
         </Link>
      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16   right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}>

        {menuLinks.map((link, index) => {
  const isActive = location.pathname === link.path;

   return (
    <Link
      key={index}
      to={link.path}
      className={`transition-all ${isActive ? 'text-[#EEFF25]    font-semibold' : 'text-[#FFFFFF]'}`}
    >
      {link.name}
    </Link>
       );
      })}

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">

            <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg">Login</button>
        </div>
      </div>
      <button className="sm:hidden cursor-pointer" aria-label="Menu" onClick={()=> setOpen(!open)} >
        <div >{open ? <IoCloseSharp className="text-2xl" /> : <CiMenuFries className="text-2xl" /> }</div>
      </button>
    </div>
  </div>
  )
}

export default Navbar