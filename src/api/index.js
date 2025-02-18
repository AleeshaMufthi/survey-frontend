import axios from "axios";

const API = axios.create({
    baseURL: 'https://survey.brain-booster.site',
    withCredentials: true,
})
  
  export default API
  