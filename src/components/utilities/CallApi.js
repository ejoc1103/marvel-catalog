import axios from 'axios';
import md5 from 'md5';

const CallApi = (
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

  const hash = md5(
    timeStamp +
      process.env.REACT_APP_PRIVATE_KEY +
      process.env.REACT_APP_PUBLIC_KEY
  );

  const fetchData = async () => {
    setLoading(true);
    const result = await axios.get(
      `https://gateway.marvel.com:443/v1/public${pathname}?${
        params.type + params.search
      }orderBy=${order}&limit=${limit}&offset=${
        pathname === '/matchgame' ? page : limit * page
      }&ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`
    );
    setContent(result.data.data.results);
    setLoading(false);
  };

  fetchData();
};

export default CallApi;
