import {
    REQUEST_ACTION_TYPE,
    SUCCESS_ACTION_TYPE,
    FAILURE_ACTION_TYPE
} from './actionTypes';
const initial_state={
    data:[],
    error:'',
    loader:false
}
const imageGallery = (initial_state, action)=>{
    switch(action.type){
        case SUCCESS_ACTION_TYPE:
            return {...initial_state, data:action.payload,loading:false};
        case FAILURE_ACTION_TYPE:
            return {...initial_state, error: action.payload};
        default:
            return {...initial_state};
    }
}
export default imageGallery;