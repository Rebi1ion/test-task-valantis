import "./Item.css";

export default function Item({ id, name, brand, price }) {
  return (
    <div className="item">
      <p className="id">ID: {id}</p>
      <h2 className="name">{name}</h2>
      <h4 className="brand">{brand}</h4>
      <span className="price">{price}₽</span>
    </div>
  );
}
