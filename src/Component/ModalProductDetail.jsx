import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faStar, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ModalProductDetail() {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-action">
          <FontAwesomeIcon icon={faTrashCan} className="icon-trash" />
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="modal-product-detail">
          <div className="image-product">
            <img src="./public/9.png" alt="ảnh 7" />
          </div>
          <div className="content-product">
            <h3>Ngũ hạt thập cẩm, hũ trang trí ý nghĩa</h3>
            <div className="wrap-start">
              <FontAwesomeIcon icon={faStar} size="lg" />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <span className="txt-price">Giá 42.000 VND</span>
            <div className="size-product">
              <span className="txt-price">Phân Loại</span>
              <div className="wrap-size">
                <p className="size small">Nhỏ</p>
                <p className="size">Vừa</p>
                <p className="size">Lớn</p>
              </div>
            </div>
            <div className="select-number">
              <div className="number">
                <p className="action-product reduce">-</p>
                <p className="number-product">5</p>
                <p className="action-product">+</p>
              </div>
              <button>Chọn mua</button>
            </div>
          </div>
        </div>
        <p className="txt-price txt-description">
          Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm
          ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với
          mọi nhà
        </p>
      </div>
    </div>
  );
}
