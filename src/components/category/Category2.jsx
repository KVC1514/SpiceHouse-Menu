import React from "react";
import Input from "../../Components/Input";

function Category2({ handleChange }) {
  return (
    <div>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
      </label>
      <Input
        handleChange={handleChange}
        value="starters"
        title="Starters"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="main"
        title="Starters"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="starters"
        title="Starters"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="starters"
        title="Starters"
        name="test"
      />
    </div>
  );
}

export default Category2;
