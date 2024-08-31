import "./GiftItem.css";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductCard(props) {
  // eslint-disable-next-line react/prop-types
  const { product, getInfo } = props;
  // eslint-disable-next-line react/prop-types
  const { image, title, price, discount } = product;

  return (
    <div className="product-card" onClick={() => getInfo(product)}>
      <img src={image} alt={title} />
      <div className="title-cart">
        <h2>{title}</h2>
        <FaShoppingCart />
      </div>
      <div className="price-discount">
        <p className="price">{price}</p>
        <p className="discount">{discount}</p>
      </div>
    </div>
  );
}
