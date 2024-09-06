import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Nav from "./Nav/Nav";
import Products from "../products/Products";
import { db } from "../main";
import { collection, onSnapshot } from "firebase/firestore";

function SideNav() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //   fiters input in query

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // filtering items
  const filterItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(toLowerCase()) !==
      -1 /*Replace products later */
  );

  //   Radio Change on side bar while clicking

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //   Button Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //   Filtering Products All
  function filteredData(users, selected, query) {
    let filteredProducts = products;

    //   Filtering query input
    if (query) {
      filteredProducts = filterItems;
    }

    //   Selected filters
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ starters, maincourse, breads, sides }) =>
          starters === selected ||
          maincourse === selected ||
          breads === selected ||
          sides === selected
      );
    }
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <SideBar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </>
  );
}

export default SideNav;
