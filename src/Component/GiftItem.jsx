/* eslint-disable react/prop-types */
import { useState } from "react";
import ModalProductDetail from "./ModalProductDetail";
import ProductCard from "./ProductCard";

const GiftItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dataProduct, openModalCreate } = props;
  const [productInfoItem, setProductInfo] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);
  const getInfo = (product) => {
    setProductInfo(product);
    setIsOpenModal(true);
  };
  return (
    <>
      <div className="app-container">
        <div className="header">
          <h1 className="title">Quà tặng</h1>
          <button className="create-button" onClick={openModalCreate}>
            Tạo
          </button>
        </div>
        <div className="product-grid">
          {dataProduct?.map((product, index) => {
            return <ProductCard product={product} key={index} getInfo={getInfo} />;
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
      <ModalProductDetail productInfo={productInfoItem} isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
};

export default GiftItem;
