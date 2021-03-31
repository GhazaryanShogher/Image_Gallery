import loader from './../Images/loader.gif';

function Loader(props){
    return(
        <div style={{display:props.display,justifyContent:"center"}}>
            <img src={loader}/>
        </div>
)}

export default Loader;