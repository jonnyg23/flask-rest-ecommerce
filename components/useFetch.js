import { useState, useEffect } from "react";

const useFetch = (requestUrl) => {
    const [data, updateData] = useState();
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(requestUrl);
        const json = await response.json();
        updateData(json);
        console.log(json);
      }
      fetchData();
    }, [requestUrl]);

    return data;
  };

export default useFetch;
