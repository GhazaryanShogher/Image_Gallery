import {
    GET_IMAGES_ACTION_REQUEST,
    GET_IMAGES_ACTION_SUCCESS,
    GET_IMAGES_ACTION_FAILURE,
    REFRESH_IMAGES_ACTION_REQUEST,
    REFRESH_IMAGES_ACTION_REFRESH,
    REFRESH_IMAGES_ACTION_FAILURE
} from './actionTypes';
const initial_state={
    data:[],
    error:'',
    loader:false,
    page:0,
}
export const getImageGallery = (state = initial_state, action)=>{
    switch(action.type){
        case GET_IMAGES_ACTION_SUCCESS:
            return {...state, data:action.payload,loader:false,page:state.page + 1};
        case GET_IMAGES_ACTION_REQUEST:
            return {...state, loader: true};
        case GET_IMAGES_ACTION_FAILURE:
            return {...state, error: action.payload};
        case REFRESH_IMAGES_ACTION_REFRESH:
            return {...state, loader: true, page:initial_state.page+1,refresh:[...action.payload]}
        case REFRESH_IMAGES_ACTION_REQUEST:
            return {...state, loader: true};
        case REFRESH_IMAGES_ACTION_FAILURE:
            return {...state, error: action.payload};    
        default:
            return {...state};
    }
}
