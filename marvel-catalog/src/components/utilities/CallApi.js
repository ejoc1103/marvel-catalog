import axios from 'axios';
import env from 'react-dotenv';
import md5 from 'md5';

const callApi = (
  pathname,
  setLoading,
  setContent,
  limit,
  order,
  page,
  params
) => {
  const date = new Date();

  const timeStamp = date.getTime();

  const hash = md5(timeStamp + env.PRIVATE_KEY + env.PUBLIC_KEY);

  const fetchData = async () => {
    setLoading(true);
    const result = await axios.get(
      `https://gateway.marvel.com:443/v1/public${pathname}?${
        params.type + params.search
      }orderBy=${order}&limit=${limit}&offset=${
        pathname === '/matchgame' ? page : limit * page
      }&ts=${timeStamp}&apikey=${env.PUBLIC_KEY}&hash=${hash}`
    );
    setContent(result.data.data.results);
    setLoading(false);
  };

  fetchData();
};

export default callApi;
