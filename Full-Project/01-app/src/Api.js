import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Params } from "react-router-dom";
import Slider from "./Slider";
const Api = () => {
  const [Product, setProduct] = useState([]);
  const id = useParams();
  console.log(id);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setProduct(result);
      });
  }, []);

  return (
    <>
      <Slider />
      <div className="container m-auto d-flex gap-4 flex-wrap mt-5 mb-5 justify-content-center">
        {Product.map((prd) => {
          return (
            <>
              <Link to={`/product/${prd.id}`}>
                <div
                  className="card"
                  style={{ height: "400px", width: "250px" }}
                >
                  <img
                    height={"200px"}
                    src={prd.images}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prd.title}</h5>
                    <p className="card-text">{prd.description.substr(1, 40)}</p>
                    <h6 className="card-price">
                      $.{prd.price} /As Par Product
                    </h6>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Api;
