
import axios  from 'axios';

const axiosPublic = axios.create({
     baseURL:'https://server-lake-phi-87.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
        
};

export default useAxiosPublic;