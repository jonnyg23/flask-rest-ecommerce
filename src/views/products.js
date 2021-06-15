import React, { useState, useEffect } from "react";
import JSONPretty from "react-json-pretty";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//import Loading from "../components/loading";

const Products = () => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const requestUrl = serverUrl + "/collections";
  const [data, updateData] = useState();
  const [productCategory, updateProductCat] = useState("");

  const useFetch = (requestUrl) => {
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(requestUrl);
        const json = await response.json();
        updateData(json);
      }
      fetchData();
    }, [requestUrl]);
  };

  const allProductsUrl = serverUrl + "/products";
  const mensApparelUrl = requestUrl + "/mens-apparel";
  const womensApparelUrl = requestUrl + "/womens-apparel";
  const holidayUrl = requestUrl + "/holiday";
  const miscUrl = requestUrl + "/misc";

  return (
    <div className="container">
      <div
        className="btn-group mt-5 fixed"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={useFetch(allProductsUrl)}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={useFetch(mensApparelUrl)}
        >
          Mens Apparel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={useFetch(womensApparelUrl)}
        >
          Womens Apparel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={useFetch(holidayUrl)}
        >
          Holiday
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={useFetch(miscUrl)}
        >
          Misc
        </button>
      </div>
      {data && (
        <div className="mt-5 flex-item">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <JSONPretty id="json-pretty" data={data}></JSONPretty>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
//<JSONPretty id="json-pretty" data={data}></JSONPretty>
export default Products;
