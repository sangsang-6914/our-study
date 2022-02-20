import axios, { AxiosInstance } from "axios";

const BASE_URL = 'https://127.0.0.1:14000/api/v1';

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    access_token: ''
  }
})