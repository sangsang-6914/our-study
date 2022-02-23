import axios, { AxiosInstance } from "axios";

const BASE_URL = `${process.env.REACT_APP_BACK}/api/v1`;

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    access_token: ''
  }
})