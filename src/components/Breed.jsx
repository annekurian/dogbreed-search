import React from "react";
import "./Breed.css";

function Breed(props) {
  return (
    <div className="breed-container d-flex p-4">
      <div className="card border-0 shadow-sm">
        <img src={props.imageUrl} alt="" className="image-component" />
        <div className="card-body">
          <h5 className="text-wrap">{props.name}</h5>
          <table className="table">
            <tbody>
              <tr>
                <td className="breed-info-label text-muted">Height</td>
                <td className="text-orange">{props.height} cm</td>
              </tr>
              <tr>
                <td className="breed-info-label text-muted">Lifespan</td>
                <td className="text-orange">{props.lifeSpan}</td>
              </tr>
              <tr>
                <td className="breed-info-label text-muted">Weight</td>
                <td className="text-orange">{props.weight} pounds</td>
              </tr>
              {props.temp ? (
                <tr>
                  <td className="breed-info-label text-muted">Temperament</td>
                  <td className="text-orange">{props.temp}</td>
                </tr>
              ) : (
                ""
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Breed;
