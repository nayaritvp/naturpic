import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Gallery from "../components/Gallery";
import IconHeart from "../components/IconHeart";

const Home = () => {
  const { products, meGusta } = useContext(ProductContext);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <div className="gallery">
        {products.map((p) => (
          <div key={p.id} className="photo-container" onClick={() => meGusta(p.id)}>
            <IconHeart filled={p.liked} />
            <img src={p.src.medium} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
