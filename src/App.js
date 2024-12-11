import React from "react";
import GoodsCard from "./GoodsCard";
import "./App.css";

import tshirt from "./assets/t-shirt.png";
import jacket from "./assets/jacket.png";
import jeans from "./assets/jeans.png";
import shorts from "./assets/shorts.png";
import sweater from "./assets/sweater.png";
import umbrella from "./assets/umbrella.png";

const App = () => {
  const goods = [
    { id: 1, name: "Футболка", price: 500, image: tshirt },
    { id: 2, name: "Куртка", price: 800, image: jacket },
    { id: 3, name: "Джинси", price: 300, image: jeans },
    { id: 4, name: "Шорти", price: 1200, image: shorts },
    { id: 5, name: "Світер", price: 1500, image: sweater },
    { id: 6, name: "Парасолька", price: 200, image: umbrella },
  ];

  return (
    <div className="App">
      <h1>Галерея товарів</h1>
      <div className="goods-gallery">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
