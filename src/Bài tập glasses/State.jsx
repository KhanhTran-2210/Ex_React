import React, { useState } from "react";
import data from "./dataGlasses.json";
import GlassItem from "./GlassItem";
import GlassList from "./GlassList";

export default function State() {
  const backgroundImage = {
    backgroundImage: `url(./glassesImage/background.jpg)`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: 'fixed',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -3,
  };
  const [selectProduct, setSeclectProduct] = useState(null);
  const handleChangeInf = (id) => {
    const product = data.find((item) => item.id === id)
    setSeclectProduct(product);
  };
  return (
    <div style={backgroundImage}>
      <div>
        
        <GlassItem product={selectProduct} />
      </div>
      <div>
        <GlassList products={data} onChangeGlass={handleChangeInf} />
      </div>
    </div>
  );
}
