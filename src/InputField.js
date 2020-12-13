export default ({ keyword, type, setSearchWord }) => {
  const passMeTheKeyword = (event) => {
    setSearchWord(type, event.target.value);
  };

  return (
    <div className="input-group">
      <input
        type={"text"}
        className="form-control"
        value={keyword.text}
        onChange={passMeTheKeyword}
      ></input>
    </div>
  );
};
