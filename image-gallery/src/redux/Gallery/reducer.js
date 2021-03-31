import {
    REFRESH_IMAGES_ACTION_REQUEST,
    REFRESH_IMAGES_ACTION_REFRESH,
    REFRESH_IMAGES_ACTION_FAILURE
} from './actionTypes';
const initial_state={
    data:[],
    error:'',
    loader:true,
    page:1,
}
export const getImageGallery = (state = initial_state, action)=>{
    switch(action.type){
        case REFRESH_IMAGES_ACTION_REFRESH:
            return {
                ...state,
                loader: false,
                page:state.page +1,
                data:[...state.data,...action.payload]
            }
        case REFRESH_IMAGES_ACTION_REQUEST:
            return {
                ...state,
                loader: true
            };
        case REFRESH_IMAGES_ACTION_FAILURE:
            return {
                ...state,
                error: action.payload,
                loader: true
            };    
        default:
            return {...state};
    }
}
