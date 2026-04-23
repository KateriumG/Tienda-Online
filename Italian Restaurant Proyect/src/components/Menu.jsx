import { useState } from "react";
import DishCard from "./DishCard";

function Menu() {
  const [showMenu, setShowMenu] = useState(true);

  const dishes = [
    {
      name: "Pizza Margherita",
      price: 12,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3"
    },
    {
      name: "Lasagna",
      price: 15,
      image: "https://images.unsplash.com/photo-1619895092538-128341789043"
    },
    {
      name: "Spaghetti Carbonara",
      price: 14,
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
    }
  ];

  return (
    <section className="menu-section">
      <h2>Nuestro Menú</h2>

      <button
        className="menu-btn"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "Ocultar menú" : "Mostrar menú"}
      </button>

      {showMenu && (
        <div className="menu-grid">
          {dishes.map((dish, index) => (
            <DishCard
              key={index}
              name={dish.name}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;