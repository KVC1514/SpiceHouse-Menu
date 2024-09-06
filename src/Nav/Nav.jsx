import React from "react";

function Nav({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search Food Item"
        />
      </div>
    </nav>
  );
}

export default Nav;
