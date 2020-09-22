import {REDUX_CONSTANTS, RESOURCE_CONSTANTS} from '../../utils/constants';

import {getAllPosts} from '../../services/api';
import store from '../store';

export const GET_POSTS = async (pageNo)=>{
    try {
        let posts = await getAllPosts(pageNo);
        if(posts){
            store.dispatch({
                type:REDUX_CONSTANTS.GET_POSTS,
                newPosts:posts.data
            });
            return {status:true,msg:RESOURCE_CONSTANTS.SUCCESSFUL_OPERATION};
        }
        else{
            return {status:true,msg:RESOURCE_CONSTANTS.NO_DATA_FOUND};
        }
    } catch (error) {
        return {status:false,msg:RESOURCE_CONSTANTS.ERROR_WHILE_GETTINGS_POSTS};
    }
}