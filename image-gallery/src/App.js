import './App.scss';
import Gallery from './Components/gallery';
import { getImagesAction } from './redux/Gallery/actions';
import { getImagesService } from './redux/Gallery/services';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
        <h1>Image Gallery</h1>
        <Gallery/>
       {/* <Card src={"https://picsum.photos/id/10/2500/1667"}/>
       <Card src={"https://picsum.photos/id/1000/5626/3635"}/>
       <Card src={"https://picsum.photos/id/1001/5616/3744"}/>
       <Card src={"https://picsum.photos/id/1006/3000/2000"}/>
       <Card src={"https://picsum.photos/id/1020/4288/2848"}/>
       <Card src={"https://picsum.photos/id/1023/3955/2094"}/> */}
    </div>
  );
}

export default App;
