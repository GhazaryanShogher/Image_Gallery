import axios from 'axios';

export const getImagesService=(url)=>{
    axios
		.get(`${url}`)
}