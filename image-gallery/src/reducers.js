import { combineReducers } from 'redux';
import imageGallery from './redux/Gallery/reducer';


const rootReducer = combineReducers({
    allShowenImages:imageGallery,  
})

export default rootReducer