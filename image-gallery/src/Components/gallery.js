import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll  from 'react-infinite-scroll-component';
import Card from './Image Card/card';
import Loader from './Loader/loader';
import { getImagesAction,refreshImagesAction } from './../redux/Gallery/actions';

function Gallery(){
    const images = useSelector(state=>state.imageGallery.data);
    const curentPage = useSelector(state=>state.imageGallery.page);
    const loader = useSelector(state=>state.imageGallery.loader);
    const dispatch = useDispatch(); 

    useEffect(()=>{        
      console.log( typeof curentPage)
      dispatch(refreshImagesAction(curentPage));
  },[]);
  useEffect(()=>{
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        dispatch(refreshImagesAction(curentPage))
      }}

    if(curentPage===6){
      return window.onscroll = ()=>{ 
        return false
      };
    }    
  },[images]);
    return(
      <div >
        <p>Just pull down to see more pictures</p>
        <Loader display={loader?'flex':'none'} />
        {(images.map((v, index) => (
        <Card key={v.id} src={v.download_url}/> 
        )))}
        <div>{curentPage===6 ?"That is all":<Loader display={!loader?'flex':'none'} />}</div>

        </div>     
)}
export default Gallery;