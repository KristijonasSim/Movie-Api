import { dummyURL } from './axiosConfig';


const USER_API_URL = {
  LOGIN: '/api/login',
}

export const userApi = {
  userLogin: (values) => dummyURL.get(USER_API_URL.LOGIN, values).then(data => data),
}