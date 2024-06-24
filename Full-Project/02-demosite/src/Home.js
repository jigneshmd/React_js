import React, { useEffect, useState } from "react";
import Slider1 from './img/img2.jpg'
import Slider2 from "./img/img1.jpg"
import Slider3 from "./img/Shoes-img3.jpg"
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products`).then((res) => {
            // console.log(res.data.products);
            setProducts(res.data.products);
        });
    }, []);
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            height={"400px"}
                            src={Slider1}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            height={"400px"}
                            src={Slider2}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            height={"400px"}
                            src={Slider3}
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className=" d-flex flex-wrap gap-3">
                {products.map((res) => {
                    return (
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                height={"200px"}
                                src={res.images[0]}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{res.title}</h5>
                                <p className="card-text">{res.description.substr(0, 50)}</p>
                                <Link to={`/product/${res.id}`} className="btn btn-primary">
                                    Go somewhere
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
