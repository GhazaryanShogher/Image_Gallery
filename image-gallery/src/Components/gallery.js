import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import InfiniteScroll  from 'react-infinite-scroll-component';
import Card from './Image Card/card';
import Loader from './Loader/loader';
import { refreshImageGallery } from './../redux/Gallery/actions';
import Grid from './Grid/grid';


function Gallery(){
    const images = useSelector(state=>state);
    const dispatch = useDispatch(); 
    console.log(images.loader)
    const pullDown = ()=>{
      dispatch(refreshImageGallery());
      return(
        <Grid>
          {
            images.refresh.map((v,i)=>{
              <Card key={i} src={v.download_url}/>
            })
          }
        </Grid>
      )
      
    }

    useEffect(()=>{
     
    })

    return(
        <InfiniteScroll
  dataLength={10} //This is important field to render the next data
  next={12}
  hasMore={true}
  pageStart={0}
  loader={true}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  below props only if you need pull down functionality
  refreshFunction={pullDown}
  pullDownToRefresh
  pullDownToRefreshThreshold={99}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
>{ images.allShowenImages.data ==undefined? (<Loader/>):
(images.allShowenImages.data.map((v, index) => (
  <Card key={index} src={v.download_url}/>
 
    )))}
</InfiniteScroll>
)}
export default Gallery;