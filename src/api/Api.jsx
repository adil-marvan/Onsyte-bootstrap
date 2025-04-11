import axios from 'axios';
import { BASE_URL} from './Config';


const api=axios.create({
    baseURL:BASE_URL,
    headers:{
       "Const-Type" :"application/json",
    },
});
const stationService ={
    getStationList:"/Station",
};

export const getStationList = async () =>{
    try{
        const response = await api.get(stationService.getStationList);
        return response.data;
    }catch(error){
        console.error("Failed to sttion list:",error);
        throw error;
    }
}
    













    