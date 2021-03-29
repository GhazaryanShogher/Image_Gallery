import {
    REQUEST_ACTION_TYPE,
    SUCCESS_ACTION_TYPE,
    FAILURE_ACTION_TYPE,
    REFRESH_ACTION_TYPE
} from './actionTypes';
import { getImagesService } from './services';
import axios from 'axios';

export const  getImagesAction =  () => {
    return (dispatch) => {
        dispatch(request());
        return axios.get(`https://picsum.photos/v2/list`)
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
        type: REQUEST_ACTION_TYPE
      }
    }
    function success(data) {
      return {
        type: SUCCESS_ACTION_TYPE,
        payload:data
      }
    }
    function failure(error) {
      return {
        type: FAILURE_ACTION_TYPE,
        payload:error
      }
    }
  
  
  export const  refreshImageGallery =  () => {
    return (dispatch) => {
        return axios.get(`https://picsum.photos/v2/list?page=1&limit=100`)
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
    function refresh(data) {
      return {
        type:REFRESH_ACTION_TYPE,
        payload:data
      }
    }
  }
  