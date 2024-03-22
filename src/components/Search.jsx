import React, { useCallback } from "react";
import { debounce } from "../services/Debounce";
import "bootstrap-icons/font/bootstrap-icons.css";

const Search = (props) => {
  const handleChange = async (value) => {
    console.log("Props:" + JSON.stringify(props) + "|" + value);
    props.onSearchTextChange(value);
  };

  const fetchResults = useCallback(debounce(handleChange), []);

  return (
    <div className="col-md-2 d-flex justify-content-start">
      <div className="input-group m-2">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          onChange={(e) => fetchResults(e.target.value)}
          className="form-control"
          id="breed-search"
          // value={props.searchText}
          placeholder="Search for breeds"
        />
      </div>
    </div>
  );
};

export default Search;
