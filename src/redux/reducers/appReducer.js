import {REDUX_CONSTANTS} from '../../utils/constants'

let initialState = {
    posts:[]
}

export const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case REDUX_CONSTANTS.GET_POSTS:
            return{
                ...state,
                posts : [...state.posts,...action.newPosts]
            }
        default:
            return state;
    }
}