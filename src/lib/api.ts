import axios from "axios";

const api = axios.create({
  baseURL:"https://api-vehicles-pedrohtbl.herokuapp.com"
})

export default api