import React, { useState } from "react";
// import "./custom.css";
import ProductArea from "./ProductArea";

const App = () => {
  const [productData, setProductData] = useState([]);

  return (
    <div>
      <ProductArea
        productData={productData}
        setProductData={setProductData}
      ></ProductArea>
    </div>
  );
};

export default App;
