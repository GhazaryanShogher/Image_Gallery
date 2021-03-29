import {
    GET_IMAGES_ACTION_REQUEST,
    GET_IMAGES_ACTION_SUCCESS,
    GET_IMAGES_ACTION_FAILURE,
    REFRESH_IMAGES_ACTION_REQUEST,
    REFRESH_IMAGES_ACTION_REFRESH,
    REFRESH_IMAGES_ACTION_FAILURE
} from './actionTypes';
import { getImagesService } from './services';

export const  getImagesAction =  () => {
    return (dispatch) => {
        dispatch(request());
        getImagesService(`https://picsum.photos/v2/list`)
        .then(response => {
          // Parse the result
          // save to redux
          dispatch(success(response.data));
        })
        .catch(error => {
          dispatch(failure(error));
          // Some error handling logic
        })
    }
  }
    function request() {
      return {
        type: GET_IMAGES_ACTION_REQUEST
      }
    }
    function success(data) {
      return {
        type: GET_IMAGES_ACTION_SUCCESS,
        payload:data
      }
    }
    function failure(error) {
      return {
        type: GET_IMAGES_ACTION_FAILURE,
        payload:error
      }
    };
  
  export const  refreshImagesAction =  () => {
    return (dispatch) => {
      getImagesService(`https://picsum.photos/v2/list?page=1&limit=100`)
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
  