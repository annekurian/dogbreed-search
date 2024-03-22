import React from "react";
import "./Breed.css";

function Breed(props) {
  return (
    <div className="breed-container d-flex p-4">
      <div className="card border-0 shadow-sm">
        <img src={props.imageUrl} alt="" className="image-component" />
        <div className="card-body">
          <h5 className="text-wrap">{props.name}</h5>
          <ul className="breed-info text-orange">
            <li>
              <span className="breed-info-label text-muted">Height: </span>
              {props.height} cm
            </li>
            <li>
              <span className="breed-info-label text-muted">Life span: </span>
              {props.lifeSpan}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Breed;
