/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const GiftItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dataProduct } = props;

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="title">Quà tặng</h1>
        <button className="create-button">Tạo</button>
      </div>
      <div className="product-grid">
        {dataProduct?.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
      <div className="pagination">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
      </div>
    </div>
  );
};

export default GiftItem;
