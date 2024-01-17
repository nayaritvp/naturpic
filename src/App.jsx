import { useContext } from "react";
import { ProductContext } from "./context/ProductProvider";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import IconHeart from "./components/IconHeart"; 

function App() {
  const { products, meGusta } = useContext(ProductContext);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              {products.map((p) => (
                <div key={p.id}>
                  <IconHeart filled={p.liked} onClick={() => meGusta(p.id)} />
                  <img onClick={() => meGusta(p.id)} src={p.src.medium} alt="" />
                </div>
              ))}
            </>
          }
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </>
  );
}

export default App;
