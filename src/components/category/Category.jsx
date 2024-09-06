import React from "react";
import { Button } from "semantic-ui-react";

function Category({ filterByCategory }) {
  return (
    <div>
      <Button onClick={() => filterByCategory("all")} fluid>
        All
      </Button>
      <Button onClick={() => filterByCategory("Main")} fluid>
        Main Course
      </Button>
      <Button onClick={() => filterByCategory("Starters")} fluid>
        Starters
      </Button>
      <Button onClick={() => filterByCategory("Desserts")} fluid>
        Desserts
      </Button>
    </div>
  );
}

export default Category;
