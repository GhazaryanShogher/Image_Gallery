import {
    REQUEST_ACTION_TYPE,
    SUCCESS_ACTION_TYPE,
    FAILURE_ACTION_TYPE,
    REFRESH_ACTION_TYPE
} from './actionTypes';
const initial_state={
    data:[],
    error:'',
    loader:false,
    page:0,
    refresh:[]
}
export const imageGallery = (initial_state, action)=>{
    switch(action.type){
        case SUCCESS_ACTION_TYPE:
            return {...initial_state, data:action.payload,loader:false};
        default:
            return {...initial_state};
    }
}
export const imageGalleryError = (initial_state, action)=>{
    switch(action.type){
        case FAILURE_ACTION_TYPE:
            return {...initial_state, error: action.payload};
        default:
            return {...initial_state};
    }
}

export const imageGalleryLoader = (initial_state, action)=>{
    switch(action.type){
        case REQUEST_ACTION_TYPE:
            return {...initial_state, loader: true};
        default:
            return {...initial_state};
    }
}
export const refreshGallery = (initial_state, action)=>{
    switch(action.type){
        case REFRESH_ACTION_TYPE:
            return {...initial_state, loader: true, page:initial_state.page+1,refresh:[...action.payload]}
        default:
            return {...initial_state};
    }
}