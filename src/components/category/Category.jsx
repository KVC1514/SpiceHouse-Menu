// import React from "react";
// import { Button } from "semantic-ui-react";
// import "./Category.css";

// function Category({ filterByCategory }) {
//   return (
//     <div className="category-container">
//       <Button
//         onClick={() => filterByCategory("all")}
//         className="category-button"
//         fluid
//       >
//         All
//       </Button>
//       <Button
//         onClick={() => filterByCategory("Main")}
//         className="category-button"
//         fluid
//       >
//         Main Course
//       </Button>
//       <Button
//         onClick={() => filterByCategory("Starters")}
//         className="category-button"
//         fluid
//       >
//         Starters
//       </Button>
//       <Button
//         onClick={() => filterByCategory("Desserts")}
//         className="category-button"
//         fluid
//       >
//         Desserts
//       </Button>
//     </div>
//   );
// }

// export default Category;

import React from "react";
import { Button } from "semantic-ui-react";
import "./Category.css";

function Category({ filterByCategory }) {
  return (
    <div className="category-container">
      <Button
        onClick={() => filterByCategory("all")}
        className="category-button"
        fluid
      >
        All
      </Button>
      <Button
        onClick={() => filterByCategory("Starter")}
        className="category-button"
        fluid
      >
        Starters
      </Button>
      <Button
        onClick={() => filterByCategory("Main Course")}
        className="category-button"
        fluid
      >
        Main Course
      </Button>
      <Button
        onClick={() => filterByCategory("Breads")}
        className="category-button"
        fluid
      >
        Breads
      </Button>
      <Button
        onClick={() => filterByCategory("Sides")}
        className="category-button"
        fluid
      >
        Sides
      </Button>
      <Button
        onClick={() => filterByCategory("Desserts")}
        className="category-button"
        fluid
      >
        Desserts
      </Button>
    </div>
  );
}

export default Category;
