import axios from "axios";
import { useEffect, useState } from "react";

const UseAxios = (url, Api) => {
  const [response, setResponse] = useState(Api);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(url);
        setResponse(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, [url]);
  return response;
};

export default UseAxios;
