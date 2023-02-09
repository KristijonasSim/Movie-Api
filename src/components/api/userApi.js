import { dummyURL, movieURL } from './axiosConfig';
const apiKey = 'c1ce56d9bce082054799f0b8407374f5'


const USER_API_URL = {
  LOGIN: '/api/login',
  REGISTER: './api/login'
}

const MOVIE_URL = {
  TRENDING:'/trending/all/week',
  TOP_RATED: '/discover/tv'
}


export const userApi = {
  
  userLogin: (values) => dummyURL.get(USER_API_URL.LOGIN, values).then(data => data),

  userRegister: (values) => dummyURL.post(USER_API_URL.REGISTER, values).then(data => data),

  getTrendingMovies: () => movieURL.get(MOVIE_URL.TRENDING,
    { params: { api_key: apiKey }})

  }



