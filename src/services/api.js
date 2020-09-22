import {URLS} from '../utils/constants';
import axios from 'axios';

export const getAllPosts = async (pageNo)=>{
    console.log(pageNo);
    try {
        const response = await axios.get(`${URLS.POSTS_API_URL}${pageNo}`);
        if(response.status == 200){
            //successful
            if(response.data){
                return {data : response.data.hits,error:null};
            }
            else{
                return {data : [],error:null};
            }
        }else{
            //error
            return {data : null,error:response.statusText};
        }
    } catch (error) {
        throw new Error();
    }
}
