import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Select from "./Select";
import Cards from "./Cards";
import axios from "axios";
import CheapCheck from "./CheapCheck";

export default ({ productData, setProductData }) => {
  const [keywords, setKeyword] = useState({
    text: "",
    checkbox: false,
    sort: "asc",
  });

  const setSearchWord = (type, newValue) => {
    setKeyword({
      ...keywords,
      [type]: newValue,
    });
  };

  useEffect(() => {
    const callAPI = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?sort=${keywords.sort}`
        );
        // setProductData(() => response.data);
        if (keywords.checkbox) {
          setProductData(response.data.filter((element) => element.price < 10));
          console.log("IF");
        } else {
          setProductData(() => response.data);
          console.log("ELSE");
        }
      } catch (err) {
        console.log("The error is:", err);
      }
    };
    callAPI();
  }, [keywords]);

  return (
    <div>
      <InputField
        keyword={keywords}
        setSearchWord={setSearchWord}
        type="text"
      />
      <Select setSearchWord={setSearchWord} type="sort" />
      <CheapCheck
        keyword={keywords}
        setSearchWord={setSearchWord}
        type="checkbox"
      />
      {productData
        .filter(
          (elem) =>
            elem.title.toUpperCase().includes(keywords.text.toUpperCase()) ||
            elem.description.toUpperCase().includes(keywords.text.toUpperCase())
        )
        .map((element) => (
          <Cards {...element} id={element.id} />
        ))}
    </div>
  );
};
