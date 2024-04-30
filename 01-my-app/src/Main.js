import React from "react";
import img1 from "./img/running-shoes.webp"
import img2 from "./img/Lightlamp.jpg"
import img3 from "./img/Bag.jpg"
import img4 from "./img/toy.jpg"
import img5 from "./img/Treeplanet.webp"

const Main = () => {
  return (
    <>
      <div className="container m-auto d-flex gap-4 flex-wrap mt-5 mb-5 justify-content-center">

        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img2} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img3} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img4} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img5} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ height: '400px', width: '250px' }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
