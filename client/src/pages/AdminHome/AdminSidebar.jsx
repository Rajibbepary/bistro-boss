import { useLocation, Link } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";

const AdminSidebar = () => {
  const location = useLocation();

  const sidebarLinks = [
    { name: "Admin Home", path: "/dashboard/addminhome", icon: <FaHome /> },
    { name: "Add Items", path: "/dashboard/reservation", icon: <ImSpoonKnife /> },
    { name: "Manage Items", path: "/chat", icon: <AiOutlineBars /> },
    { name: "Booking", path: "/dashboard/cart", icon: <FaBook /> },
    { name: "All Users", path: "/dashboard/review", icon: <FaUsers /> },
  ];

  return (
    <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {sidebarLinks.map(({ name, path, icon }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            to={path}
            key={path}
            className={`flex items-center py-3 px-4 gap-3 transition-colors duration-200 ${
              isActive
                ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-orange-500 text-orange-500"
                : "hover:bg-gray-100/90 text-gray-700"
            }`}
          >
            {icon}
            <span className="md:block hidden font-Cinzel uppercase">{name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default AdminSidebar;
