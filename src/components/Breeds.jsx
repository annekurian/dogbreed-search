import React from "react";
import Breed from "./Breed";
import "./Breeds.css";

const Breeds = (props) => {
  const { searchText, breeds, sortField } = props;
  // console.log("Breeds :" + breeds + "|" + searchText);

  const sortBy = (property) => {
    return function (a, b) {
      if (property === "name") {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      if (property === "height") {
        const x =
          a[property].metric.indexOf("-") > -1
            ? a[property].metric.substring(a[property].metric.indexOf("-") + 1)
            : a[property].metric;
        const y =
          a[property].metric.indexOf("-") > -1
            ? b[property].metric.substring(b[property].metric.indexOf("-") + 1)
            : b[property].metric;
        if (x < y) return -1;
        if (x > y) return 1;
        return 0;
      }
      if (property === "life-span") {
        const x =
          a.life_span.indexOf("-") > -1
            ? a.life_span.substring(
                a.life_span.indexOf("-") + 1,
                a.life_span.indexOf("years")
              )
            : a.life_span.substring(0, a.life_span.indexOf("years"));
        const y =
          b.life_span.indexOf("-") > -1
            ? b.life_span.substring(
                b.life_span.indexOf("-") + 1,
                b.life_span.indexOf("years")
              )
            : b.life_span.substring(0, b.life_span.indexOf("years"));
        if (parseInt(x) < parseInt(y)) return -1;
        if (parseInt(x) > parseInt(y)) return 1;
        return 0;
      }
    };
  };

  const breedRows = () => {
    const rows = [];
    // console.log("Search text in Breeds:" + JSON.stringify(searchText));
    if (searchText) {
      const searchedBreed = Array.from(breeds).filter(
        (b) => b.name.toUpperCase().indexOf(searchText.toUpperCase()) > -1
      );
      if (!searchedBreed) return <span>No details found</span>;
      // console.log("Search Breed", searchedBreed[0]);
      searchedBreed.map((breed) =>
        rows.push(
          <Breed
            key={breed.id}
            name={breed.name}
            lifeSpan={breed.life_span}
            imageUrl={breed.image.url}
            height={breed.height.metric}
          />
        )
      );
    } else {
      console.log("Display All:" + sortField);
      if (sortField) breeds.sort(sortBy(sortField));
      Array.from(breeds).map((breed) =>
        rows.push(
          <Breed
            key={breed.id}
            name={breed.name}
            lifeSpan={breed.life_span}
            imageUrl={breed.image.url}
            height={breed.height.metric}
            temp={breed.temperament}
          />
        )
      );
    }
    return rows;
  };

  return (
    <div className="d-flex flex-wrap flex-row mb-3">
      {breeds && breeds.length > 0 && breedRows()}
    </div>
  );
};

export default Breeds;
