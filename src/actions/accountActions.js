import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../config/axiosInstance';
import {
  CREATE_ACCOUNT, GET_ACCOUNT, GET_ERRORS, ACCOUNT_LOADING,
} from './types';