import axios from 'axios';
import { useEffect } from 'react';

const url = 'https://course-api.com/react-store-products';

const FetchData = () => {
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>FetchData</div>;
};
export default FetchData;
