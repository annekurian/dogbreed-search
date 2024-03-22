/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./App.css";
import Breeds from "./components/Breeds";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import SortField from "./components/SortField";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "./utils/banner-image.jpg";
import bannerText from "./utils/banner-heading.png";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortField, setSortField] = useState("default");

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "x-api-key",
      "live_CfHX8Qa2G6qbGgQWvZDVFlx7uc9Nx2b1Jazep0zmhchMwFtRYgC0Ij8hFzWSuyN1"
    );
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const fetchData = () => {
      setLoading(true);

      fetch("https://api.thedogapi.com/v1/breeds", requestOptions)
        .then((response) => response.json())
        .then(async (data) => {
          setBreeds(data);
          setLoading(false);
        })
        .catch((error) => setBreeds([]));
    };
    fetchData();
    document.title = "Woof";
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleSort = (value) => {
    setSortField(value);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-around bg-warning banner">
        <div className="d-flex flex-column justify-content-center">
          <img src={bannerText} alt="" className="banner-heading" />
          <h2 className="d-flex align-items-center">
            All about your best buds
          </h2>
        </div>
        <img
          src={banner}
          className="p-3"
          alt="Image by /<a href='https://www.freepik.com/free-vector/hand-drawn-dog-outline-illustration_22429900.htm#query=dog%20drawing&position=1&from_view=keyword&track=ais&uuid=3311211e-e127-4d3b-a627-d558045d3101'>Freepik</a>"
        />
      </div>
      <form className="row ms-1 mt-5">
        <Search onSearchTextChange={handleSearch} />
        <SortField onSortFieldChange={handleSort} />
      </form>
      {loading ? (
        <Spinner />
      ) : (
        <Breeds searchText={searchText} breeds={breeds} sortField={sortField} />
      )}
    </React.Fragment>
  );
};

export default App;
