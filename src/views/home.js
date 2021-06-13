import React, { useEffect, useState, Fragment } from "react";
import Welcome from "../components/welcome";
import useAxios from "../hooks/useAxios";
import { backendApi } from "../apis/axiosRequests";

const Home = () => {
  const [url, setUrl] = useState("/products");

  const { response, isLoading } = useAxios({
    api: backendApi,
    method: "get",
    url: `${url}`
    // config: JSON.stringify({ requireAuthentication: true }),
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return (
    <Fragment>
      <Welcome />
      <button onClick={() => setUrl("/collections/holiday")}>Holiday</button>
      <button>Products</button>

      <div>{JSON.stringify(data)}</div>
    </Fragment>
  );
};

export default Home;
