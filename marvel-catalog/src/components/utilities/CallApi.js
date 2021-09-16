import axios from "axios";
import { timestamp, publicKey, hash } from "../../utils";

const callApi = (pathname, setLoading, setContent, limit, order, page) => {
  let type = "/characters";

  if (pathname !== "/") {
    type = pathname;
  }
  const fetchData = async () => {
    setLoading(true);

    const result = await axios.get(
      `https://gateway.marvel.com:443/v1/public${type}?orderBy=name&limit=10&offset=10&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    );
    setContent(result.data.data.results);
    setLoading(false);
  };
  fetchData();
};

export default callApi;
