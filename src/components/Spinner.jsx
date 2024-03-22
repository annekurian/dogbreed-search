import React from "react";

function Spinner() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
}

export default Spinner;
