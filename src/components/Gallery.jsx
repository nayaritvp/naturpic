import IconHeart from "./IconHeart";

const Gallery = ({ products, onLike }) => {
  return (
    <div className="gallery grid-columns-4">
      {products.map((p) => (
        <div key={p.id} className="photo">
          <IconHeart filled={p.liked} onClick={() => onLike(p.id)} />
          <img src={p.src.medium} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

