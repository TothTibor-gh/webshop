import React from "react";
import axios from "axios";

export default ({ title, price, category, description, image, id }) => {
  const deleteItemAPI = async () => {
    const response = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    console.log(response.status);
  };

  return (
    <div className="card mb-4" styles="max-width: 540px;">
      <div className="row g-0">
        <div className="col-md-3">
          <img className="card-img" src={image} alt="alt szoveg" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">
              #{id} - {title}
            </h5>
            <h6>€{price} </h6>
            <div className="card-text"> {category} </div>
            <div className="card-text">{description} </div>
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteItemAPI}
            >
              {" "}
              DELETE ITEM{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
