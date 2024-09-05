import "./GiftItem.css";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductCard(props) {
  // eslint-disable-next-line react/prop-types
  const { product, getInfo } = props;
  console.log(product);

  // eslint-disable-next-line react/prop-types
  const { image, title, price, discount, status } = product;

  return (
    <div className="product-card" onClick={() => getInfo(product)}>
      <img src={image} alt={title} />
      <div className="title-cart">
        <h2>{title}</h2>
        <FaShoppingCart />
      </div>
      <div className="price-discount">
        <p className="price">{price}</p>
        <p className="discount">-{discount}%</p>
      </div>
      <div className="status-product">
        <p>{status === "outOfStock" ? "Hết Hàng" : "Còn hàng"}</p>
      </div>
    </div>
  );
}
