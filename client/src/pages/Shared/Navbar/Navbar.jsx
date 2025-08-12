import { useContext, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import { assets, menuLinks } from "../../../assets/assets";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
const Navbar = () => {
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/"); // Redirect after logout
      })
      .catch((error) => console.error(error));
  };

  const handleAuthButtonClick = () => {
    if (user) {
      handleLogOut();
    } else {
      navigate("/login"); // Redirect to login
    }
  };

  return (
    <div className="fixed w-full z-10 bg-black/30">
      <div
        className={`flex items-center justify-between px-4 md:px-12 lg:px-12 xl:px-24 py-4 text-white relative transition-all ${
          location.pathname === "/" && "bg-light"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            className="w-10 max-sm:hidden h-10 object-cover"
            alt="Logo"
          />
        </Link>

        {/* Menu Links */}
        <div
          className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
            open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
          }`}
        >
          {menuLinks.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                className={`transition-all ${
                  isActive
                    ? "text-[#EEFF25] font-semibold  max-sm:text-black max-sm:bg-white px-1 max-sm:rounded-sm"
                    : "lg:text-[#FFFFFF] max-sm:text-[#EEFF25]"
                }`}
              >
                {link.name}
               
              </Link>
              
            );
          })}
      <div className="flex relative">
          <FaCartPlus className="text-2xl" />
          <div className="absolute top-0 left-2  bg-red-500 text-white text-xs rounded-md px-1">
            +{cart.length}
          </div>
        </div>

          {/* Login/Logout Button */}
          <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
            <button
              onClick={handleAuthButtonClick}
              className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
            >
              {user ? "Logout" : "Login"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden cursor-pointer"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoCloseSharp className="text-2xl" />
          ) : (
            <CiMenuFries className="text-2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
