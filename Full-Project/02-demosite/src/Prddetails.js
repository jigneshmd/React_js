import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Prddetails = () => {
  const routeParams = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${routeParams.id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

  return (
    <>
    
    </>
  );
};

export default Prddetails;
