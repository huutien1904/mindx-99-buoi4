import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faStar, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function ModalProductCreate(props) {
  // eslint-disable-next-line react/prop-types
  const { isOpenModalCreateProduct, closeModalCreate } = props;
  const submitCreate = (value) => {
    value.preventDefault();
    console.log(value.target);

    // ...or iterate through the name-value pairs
  };
  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: isOpenModalCreateProduct ? "block" : "none" }}
    >
      <div className="modal-content">
        <div className="modal-action-create">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={closeModalCreate}
            style={{ cursor: "pointer" }}
          />
        </div>
        <h1 style={{ textAlign: "center" }}>Tạo sản phẩm mới</h1>
        <form className="content" onSubmit={submitCreate}>
          <div className="name-product">
            <label
              htmlFor=""
              className="formbold-form-label"
              style={{ textAlign: "center" }}
            >
              Tên sản phẩm
            </label>
            <input
              type="text"
              name="name"
              id="firstname"
              className="formbold-form-input"
            />
          </div>
          <div className="name-product">
            <label
              htmlFor=""
              className="formbold-form-label"
              style={{ textAlign: "center" }}
            >
              Hình ảnh sản phẩm
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="formbold-form-input"
            />
          </div>
          <div className="name-product">
            <label
              htmlFor=""
              className="formbold-form-label"
              style={{ textAlign: "center" }}
            >
              Đánh giá
            </label>
            <input
              type="number"
              name="rating"
              id="rate"
              className="formbold-form-number"
            />
          </div>
          <div className="name-product">
            <label
              htmlFor=""
              className="formbold-form-label"
              style={{ textAlign: "center" }}
            >
              Giá
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="formbold-form-input"
            />
          </div>
          <button type="submit">Thêm Mới</button>
        </form>
      </div>
    </div>
  );
}
