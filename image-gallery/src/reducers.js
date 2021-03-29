import { combineReducers } from 'redux';
import {imageGallery, imageGalleryError, imageGalleryLoader, refreshGallery} from './redux/Gallery/reducer';


const rootReducer = combineReducers({
    allShowenImages:imageGallery, 
    error:imageGalleryError,
    loader:imageGalleryLoader,
    refresh:refreshGallery
})

export default rootReducer