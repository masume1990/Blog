import axios from "axios";
import { Constants } from "./settings";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common[ 'Content-Type'] = 'application/json';
axios.defaults.baseURL = Constants.baseUrl;

const HandleError = (error = {}) => {
  console.log(error);
};

const get = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        if (response && response.data) {
          resolve(response.data);
        }
      })
      .catch((error) => {
        HandleError(error && error.response && error.response.data);
        reject(error && error.response && error.response.data);
      });
  });
};

const post = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((response) => {
        if (response && response.data) {
          if (response.status === 200) {
            resolve(response.data);
          } else {
            HandleError(response.data);
            reject(response.data);
          }
        }
      })
      .catch((error) => {
        HandleError(error && error.response && error.response.data);
        reject(error && error.response && error.response.data);
      });
  });
};

export default {
  user: {
    login:(params = {})=>{
        return post(`auth/login`,params,)
    }
  },
  post: {
    list: (params = {}) => {
      return get(`posts`);
    },
  },
  category: {
    list:  (params = {}) => {
        return get(`post-categories`);
      },
  },
};
