import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll  from 'react-infinite-scroll-component';
import Card from './Image Card/card';
import Loader from './Loader/loader';
import Grid from './Grid/container';
import { getImagesAction,refreshImagesAction } from './../redux/Gallery/actions';



function Gallery(){
    const images = useSelector(state=>state.imageGallery.data);
    const images1 = useSelector(state=>state);
    const dispatch = useDispatch(); 
    const grid = document.getElementById('grid');
    console.log(window.scrollY)
    const pullDown = ()=>{
      console.log(images)
      console.log("images1",images1)
    
          
    }

    useEffect(()=>{
      dispatch(getImagesAction())
    //  if(window.innerHeight==Math.round(window.scrollY))
    // return(  
    // <Grid>{
    //     images.refresh.map((v,i)=>{
    //       <Card key={i} src={v.download_url}/>
    //     })
    //   }
    // </Grid>)     
    
  },[]);
    
    return(
      <div>
         {/* <button onClick={pullDown}>Get Images</button> */}
    
     {/* // <h1>Hello</h1> */}
   
    {/* // <button>Refresh Images</button></div>) */} 
    {images == undefined? (<Loader/>):
        (images.map((v, index) => (
        <Card key={v.id} src={v.download_url}/> 
        )))}
        <Loader/>
        </div>     
)}
export default Gallery;