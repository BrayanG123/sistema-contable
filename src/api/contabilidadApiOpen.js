import axios from 'axios';
import { getEnvVariables } from '../helpers';





const { VITE_API_URL } = getEnvVariables();

const contabilidadApiOpen = axios.create({
    baseURL: VITE_API_URL
});

export default contabilidadApiOpen;
