import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext)
    const location = useLocation();


    if(loading){
        return <div class="relative w-12 h-12 rounded-full rotate-45 [perspective:1000px] text-white">
                <div class="absolute inset-0 rounded-full rotate-x-[70deg] animate-spinCustom"></div>
                <div class="absolute inset-0 rounded-full text-[#FF3D00] rotate-y-[70deg] animate-spinCustom [animation-delay:0.4s]"></div>
                </div>

    }



    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from:location}} replace/>
};

export default PrivateRoute;