import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [likedPhotos, setLikedPhotos] = useState([]);

  const pedirFotos = async () => {
    const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=15', {
      headers: {
        Authorization: 'bQRsNXpRnKv4XtRQp35DlRpdX59h0i7CtFcq0nKa9poZcirCpPQ2I5SD'
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener las imágenes');
    }

    const data = await response.json();
    setProducts(data.photos);
    setLikedPhotos(data.photos.filter((p) => p.liked));
  };

  const meGusta = (id) => {
    const updatedPhotos = products.map(p => {
      if (p.id === id) {
        return { ...p, liked: !p.liked };
      }
      return p;
    });

    setProducts(updatedPhotos);

    const newLikedPhotos = updatedPhotos.filter(p => p.liked);
    setLikedPhotos(newLikedPhotos);
  };

  useEffect(() => {
    pedirFotos();
  }, []);

  return (
    <ProductContext.Provider value={{ products, likedPhotos, setProducts, meGusta }}>
      {children}
    </ProductContext.Provider>
  );
};
