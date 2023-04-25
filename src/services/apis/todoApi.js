import axios from "axios";
import { END_POINT } from "../configs/end-point";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getAllTodo = async () =>
  axios
    .get(`${BASE_URL}${END_POINT.GET_ALL_TODO}`)
    .then((response) => response.data);

export const postTodo = async (paramsData) =>
  axios
    .post(`${BASE_URL}${END_POINT.POST_TODO}`, paramsData)
    .then((response) => response.data);
