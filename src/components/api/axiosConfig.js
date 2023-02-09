import axios from 'axios';

export const dummyURL = axios.create({
  baseURL: "https://63bbe82a32d17a50909c27e0.mockapi.io",
});



export const movieURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


