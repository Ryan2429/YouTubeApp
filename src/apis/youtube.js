import axios from 'axios';

const KEY = 'AIzaSyDlTrRuaoxoTkaG91Mfd1ftbzOQe9KIdcc';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   } 
});

