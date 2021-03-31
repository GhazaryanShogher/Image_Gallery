import {
    REFRESH_IMAGES_ACTION_REQUEST,
    REFRESH_IMAGES_ACTION_REFRESH,
    REFRESH_IMAGES_ACTION_FAILURE
} from './actionTypes';
import { getImagesService } from './services';


  export const  refreshImagesAction =  (page) => { 
    return (dispatch) => {         
    dispatch(request());
      getImagesService(`https://picsum.photos/v2/list?page=${page}&limit=30`)
        .then(response => {
          // Parse the result
          // save to redux
          dispatch(refresh(response.data));
        })
        .catch(error => {
          dispatch(failure(error));
          // Some error handling logic
        })
    }
    function request() {
      return {
        type: REFRESH_IMAGES_ACTION_REQUEST
      }
    }
    function refresh(data) {
      return {
        type:REFRESH_IMAGES_ACTION_REFRESH,
        payload:data
      }
    }
    function failure(error) {
      return {
        type: REFRESH_IMAGES_ACTION_FAILURE,
        payload:error
      }
    }
  
  }
  