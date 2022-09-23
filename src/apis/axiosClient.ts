import axios from "axios";
import { Config, LOCAL_STORAGE } from "../utils/constants";

const req = axios.create({
  baseURL: Config.HOST_API,
});

const postService = async (
  url: string,
  body?: object,
  isAuthorization = true,
  isFormData = false
) => {
  const headers: any = isFormData
    ? { "Content-Type": "multipart/form-data" }
    : { Accept: "application/json", "Content-Type": "application/json" };

  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
  if (!!token && token !== "") {
    headers.Authorization =
      "Bearer " + localStorage.getItem(LOCAL_STORAGE.TOKEN);
  }

  const requestOptions: any = {
    method: "POST",
    headers: headers,
    credentials: "include",
  };

  const response = req.post(url, JSON.stringify(body), requestOptions);
  try {
    await response;
  } catch (error: any) {
    console.log("error", error.response);
    if ([401].includes(error.response.status)) {
      localStorage.setItem(LOCAL_STORAGE.TOKEN, "");
      // configureStore.store.dispatch(signOut());
    }
  }

  return response;
};
const updateService = async (
  url: string,
  body?: object,
  isAuthorization = true,
  isFormData = false
) => {
  const headers: any = isFormData
    ? { "Content-Type": "multipart/form-data" }
    : { Accept: "application/json", "Content-Type": "application/json" };
  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
  if (!!token && token !== "") {
    headers.Authorization =
      "Bearer " + localStorage.getItem(LOCAL_STORAGE.TOKEN);
  }

  const requestOptions: any = {
    method: "PUT",
    headers: headers,
    credentials: "include",
  };

  const response = req.patch(url, JSON.stringify(body), requestOptions);
  try {
    await response;
  } catch (error: any) {
    console.log("error", error.response);
    if ([401, 404].includes(error.response.status)) {
      localStorage.setItem(LOCAL_STORAGE.TOKEN, "");
      // configureStore.store.dispatch(signOut());
    }
  }

  return response;
};

const getService = async (
  url: string,
  params?: any,
  body?: object | null,
  isAuthorization = true
) => {
  const headers: any = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
  if (!!token && token !== "") {
    headers.Authorization =
      "Bearer " + localStorage.getItem(LOCAL_STORAGE.TOKEN);
  }

  const requestOptions: any = {
    method: "GET",
    headers: headers,
    params: params,
  };

  const response = req.get(url, requestOptions);
  try {
    await response;
  } catch (error: any) {
    console.log("error", error.response);
    if ([401, 404].includes(error.response.status)) {
      localStorage.setItem(LOCAL_STORAGE.TOKEN, "");
      // configureStore.store.dispatch(signOut());
    }
  }

  return response;
};

const uploadService = async (
  url: string,
  formData: any,
  isAuthorization = true
) => {
  const headers: any = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  };

  const token = localStorage.getItem(LOCAL_STORAGE.TOKEN);
  if (!!token && token !== "") {
    headers.Authorization =
      "Bearer " + localStorage.getItem(LOCAL_STORAGE.TOKEN);
  }

  const requestOptions: any = {
    method: "POST",
    headers: headers,
    credentials: "include",
  };

  const response = req.post(url, formData, requestOptions);
  return response;
};

export default { postService, getService, updateService, uploadService };
