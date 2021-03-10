import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "77914f2b-e21f-4b69-89ab-95637cf60626",
  },
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};

export const authAPI = {
  getUsersMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getUsersProfile(userId) {
    return instance.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getUsersStatus(userId) {
    return instance.get(`profile/status/` + userId).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart / form - data",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};
