import axios from "axios";
import {config} from "./config.ts";


export default axios.create({
	baseURL: 'https://api.rawg.io/api',
  params: {
    key: config.RAWG_API_KEY
  }
})