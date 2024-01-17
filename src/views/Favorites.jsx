import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import IconHeart from "../components/IconHeart";

const Favorites = () => {
  const { likedPhotos, meGusta } = useContext(ProductContext);

  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <div className="gallery">
        {likedPhotos.map((p) => (
          <div key={p.id} className="photo-container" onClick={() => meGusta(p.id)}>
            <IconHeart filled={p.liked} />
            <img src={p.src.medium} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;





