import axios from 'axios';
import { baseUrl } from '../constants/config';

export const getMembers = () => {
    const membersUrl = `${baseUrl}/member`;
    return axios.get(membersUrl);
}