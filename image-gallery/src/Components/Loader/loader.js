import React, { useEffect } from 'react';
import loader from './../Images/loader.gif';

function Loader(props){
    return(
        <img src={loader} style={{display:props.display}}/>
)}

export default Loader;