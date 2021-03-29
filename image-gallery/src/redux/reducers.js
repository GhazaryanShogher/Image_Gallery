import { combineReducers } from 'redux';
import {getImageGallery} from './Gallery/reducer';


const rootReducer = combineReducers({
    imageGallery:getImageGallery,
})

export default rootReducer