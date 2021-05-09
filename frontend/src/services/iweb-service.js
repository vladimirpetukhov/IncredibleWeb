import axios from "../utils/axios";
import { POPULAR_MOVIES } from "../constants/api";

export default class IWebService {
  data = [
    {
      id: 1,
      name: "Production-Ready",
      author: "John",
    },
    {
      id: 2,
      name: "Release-IT",
      author: "Michael T. N",
    },
  ];

  getMovies(page = 1) {
    return axios(POPULAR_MOVIES, { params: { page } })
  }
}
