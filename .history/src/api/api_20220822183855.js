import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { "API-KEY": "8ac57bdd-335d-4484-97e6-aa82dc13f9bd" },
});

export const usersAPI = {
  requestUsers(currentPage, pageSize) {
   return (
    axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
     .then (response => response.data)
   );
  },
  deleteFollowing(userId) {
    return (
     axiosInstance.delete(`follow/${userId}`)
     .then (response => response.data)
    );
  },
  doFollowing(userId) {
    return (
     axiosInstance.post(`follow/${userId}`, {})
     .then (response => response.data)
    );
  },

  getProfile(userId) {
    console.warn("Obsolete method. Please use authAPI object");
    return profileAPI.getProfile(userId);
   },
};

export const profileAPI = {
  getProfile(userId) {
    return (
      axiosInstance.get(`profile/` + userId)
    );
  },
  getStatus(userId){
    return(
      axiosInstance.get(`profile/status/` + userId)
    );
  },
  updateStatus(status){
    return(
      axiosInstance.put(`profile/status`, {status: status})
    );
  },
};


export const authAPI = {
  getAuth() {
    return (
     axiosInstance.get(`auth/me`)
     .then (response => response.data)
    );
  },
  login(email, password, rememberMe = false) {
    return (
    axiosInstance.post(`auth/login`, {email, password, rememberMe})
    .then (response => response.data)
    );
  },
  logout() {
    return (
    axiosInstance.delete(`auth/login`)
    .then (response => response.data)
    );
  }
}
