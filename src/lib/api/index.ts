import axios from "axios";

/**
 * Common options for pagination and sorting resource collections.
 */
export type CommonListParams = {
  limit?: number;
  page?: number;
  sort?: string[];
};

/**
 * Response from API.
 */
export type Response<T> = {
  data: T;
  total?: number;
  pages?: number;
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
