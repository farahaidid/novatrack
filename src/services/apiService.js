import axios from "axios";
import store from "../store"
import router from "../router"

var geocodeUrl = "https://geocode-maps.wialon.com/hst-api.wialon.com/gis_geocode";
var baseURL = "";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  }
});

axiosInstance.interceptors.request.use(
  config => {
    // let loginStatus = store.getters['loginInfo/isLogged']; 
    // if (loginStatus) {
    //   config.headers["authorization"] = "Bearer "+ store.getters['loginInfo/token']
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// createAxiosResponseInterceptor();

// function createAxiosResponseInterceptor() {
//   const interceptor = axiosInstance.interceptors.response.use(
//       response => response,
//       async error => {
//         if (error.response.status !== 401) {
//           return Promise.reject(error);
//         }
//         axiosInstance.interceptors.response.eject(interceptor); 
//         return await axiosInstance.post(baseURL+"/login_refresh",{
//           refresh_token: store.getters['loginInfo/refreshToken']
//         }).then(t=>{
//           store.commit("loginInfo/SET_TOKEN",t.data.token);
//           store.commit("loginInfo/SET_REFRESH_TOKEN",t.data.refresh_token);
//           return axiosInstance(error.config);
//         })
//         .catch(err=>{
//           store.commit("userData/CLEAR_USER_DATA")
//           store.commit("loginInfo/CLEAR_LOGIN_DATA")
//           store.commit("tableSettings/CLEAR_TABLE_SETTINGS_DATA")
//           router.push({name:"login"})
//         })
//         .finally(createAxiosResponseInterceptor);
//       }
//   );
// }

export default {
  reqApi(url) {
    return {
      post: data => axiosInstance.post(baseURL + url, data),
      getByBody: data => axiosInstance.get(baseURL + url, data),
      put: data => axiosInstance.put(baseURL + url, data),
      update: data => axiosInstance.put(baseURL + url, data),
      get: () => axiosInstance.get(baseURL + url),
      getById: id => axiosInstance.get(`${baseURL + url}/${id}`),
      delete: id => axiosInstance.delete(`${baseURL + url}/${id}`),
      putByid: id => axiosInstance.put(`${baseURL + url}/${id}`),
      email: toMail => axiosInstance.post(baseURL + url, toMail)
    };
  },

  geocodeApi(url) {
    return {
      post: data => axiosInstance.post(geocodeUrl + url, data),
      put: data => axiosInstance.put(geocodeUrl + url, data),
      update: data => axiosInstance.put(geocodeUrl + url, data),
      get: () => axiosInstance.get(geocodeUrl + url),
      delete: id => axiosInstance.delete(`${geocodeUrl + url}/${id}`),
    };
  },

  remote(url) {
    return {
      create: toCreate => axiosInstance.post(url, toCreate),
      update: toUpdate => axiosInstance.put(url, toUpdate),
      get: () => axiosInstance.get(url),
      delete: () => axiosInstance.delete(url),
      email: toMail => axiosInstance.post(url, toMail)
    };
  },

  BASEURL: baseURL
};
