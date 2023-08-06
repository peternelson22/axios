import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const Globals = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios.get(productsUrl); // no need to pass headers because it was set globally as 'application/json'
      const resp2 = await axios.get(randomUserUrl);
      console.log(resp1);
    } catch (error) {
      console.log(error.resp1);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <h2 className='text-center'>global instance</h2>;
};
export default Globals;
