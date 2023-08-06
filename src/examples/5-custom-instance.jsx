import axios from 'axios';
import { authFetch } from '../axios/custom';
import { useEffect } from 'react';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const { log } = console;
  const fetchData = async () => {
    try {
      const resp1 = await authFetch('/react-store-products');
      const resp2 = await axios(randomUserUrl);
      log(resp1);
      log(resp2);
    } catch (error) {
      log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
