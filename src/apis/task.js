import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants/index';

const url = 'tasks';

export const getList = () => axiosService.get(`${API_ENDPOINT}/${url}`);