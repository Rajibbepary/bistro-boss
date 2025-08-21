import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptor', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error)
    });
    // intercepts 401 and 403 with request status
    axiosSecure.interceptors.response.use( function(response){
        return response;
    }, (error) =>{
        const status = error.response.status;
        console.log('status in the ', status)
         return Promise.reject(error)
    })

    return axiosSecure;
};

export default useAxiosSecure;