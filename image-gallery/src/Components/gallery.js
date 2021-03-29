import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll  from 'react-infinite-scroll-component';
import Card from './Image Card/card';
import Loader from './Loader/loader';
import Grid from './Grid/container';
import { getImagesAction,refreshImagesAction } from './../redux/Gallery/actions';

function Gallery(){
    const images = useSelector(state=>state.imageGallery.data);
    const curentPage = useSelector(state=>state.imageGallery.page);
    const dispatch = useDispatch(); 

    document.addEventListener('scroll', ()=> {
      if(window.innerHeight == Math.round(window.scrollY)){
        dispatch(refreshImagesAction(curentPage))
      }
    });    
      
    const pullDown = ()=>{
      dispatch(refreshImagesAction(curentPage))
    }

    useEffect(()=>{        
      dispatch(getImagesAction())
  },[]);
  useEffect(()=>{
    
  },[images])
    return(
      <div>
         <button onClick={pullDown} className="btn">Get Images</button>
    
     {/* // <h1>Hello</h1> */}
   
    {/* // <button>Refresh Images</button></div>) */} 
    {images == undefined? (<Loader/>):
        (images.map((v, index) => (
        <Card key={v.id} src={v.download_url}/> 
        )))}
        <div><Loader/></div>
        </div>     
)}
export default Gallery;