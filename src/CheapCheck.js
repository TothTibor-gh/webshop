import React from "react";

export default ({ setSearchWord, keyword, type }) => {
  const passMeTheKeyword = (event) => {
    setSearchWord(type, event.target.value);
    console.log(keyword.checkbox);
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type={type}
        value={keyword.checkbox}
        onChange={passMeTheKeyword}
      />
      <label className="form-check-label">Show me only cheap products</label>
    </div>
  );
};
