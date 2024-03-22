import React from "react";

function SortField(props) {
  const handleChange = (e) => {
    props.onSortFieldChange(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="col-md-2 d-flex justify-content-end">
        <div className="input-group m-2">
          <span className="input-group-text">
            <i className="bi bi-sort-down"></i>
          </span>
          <select
            // value={props.sortField}
            onChange={handleChange}
            className="form-control form-select"
          >
            <option value="name">Name</option>
            <option value="height">Height</option>
            <option value="life-span">Life span</option>
          </select>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SortField;
