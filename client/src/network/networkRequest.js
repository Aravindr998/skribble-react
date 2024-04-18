import isEmpty from "lodash/isEmpty";
import axios from "./axios";
import { hideLoader } from "../redux/slices/loaderSlice";

let apiCalls = 0;

export const httpMethods = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};

export const endPoints = {
  createRoom: "/create-room",
};

export default async function networkRequest(
  url,
  { method = httpMethods.get, headers = {}, body = {} },
  dispatch
) {
  try {
    apiCalls++;
    const request = {
      method,
      url,
      headers: { "Content-Type": "application/json", ...headers },
    };
    if (method !== httpMethods.get && method !== httpMethods.delete) {
      request.data = body;
    } else {
      if (!isEmpty(body)) {
        const queryParams = new URLSearchParams(body).toString();
        url += `?${queryParams}`;
      }
    }
    const { data } = await axios(request);
    apiCalls = apiCalls <= 0 ? 0 : --apiCalls;
    if (apiCalls === 0) dispatch(hideLoader());
    return data;
  } catch (error) {
    console.log(error);
    apiCalls = apiCalls <= 0 ? 0 : --apiCalls;
    if (apiCalls === 0) dispatch(hideLoader());
  }
}
