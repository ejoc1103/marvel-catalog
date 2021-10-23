import axios from "axios";
import { timestamp, publicKey, hash } from "../../utils";

const callApi = (
  pathname,
  setLoading,
  setContent,
  limit,
  order,
  page,
  params,
) => {
  const fetchData = async () => {
    setLoading(true);
    const result = await axios.get(
      `https://gateway.marvel.com:443/v1/public${pathname}?${
        params.type + params.search
      }orderBy=${order}&limit=${limit}&offset=${
        pathname === "/matchgame" ? page : limit * page
      }&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    );
    setContent(result.data.data.results);
    setLoading(false);
  };

  fetchData();
};

export default callApi;
