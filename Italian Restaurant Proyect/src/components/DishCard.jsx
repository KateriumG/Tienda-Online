function DishCard({ name, price, image }) {
  return (
    <div className="dish-card">
      <img src={image} alt={name} width="150" />
      <div className="dish-info">
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default DishCard;