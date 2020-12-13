import React from "react";

export default ({ setSearchWord, type }) => {
  const passMeTheKeyword = (event) => {
    setSearchWord(type, event.target.value);
  };

  return (
    <select type={type} className="form-select" onChange={passMeTheKeyword}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};
