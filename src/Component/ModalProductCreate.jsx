import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faStar, faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function ModalProductCreate(props) {
  // eslint-disable-next-line react/prop-types
  const { isOpenModalCreateProduct, closeModalCreate } = props;

  return (
    <div id="myModal" className="modal" style={{ display: isOpenModalCreateProduct ? "block" : "none" }}>
      <div className="modal-content">
        <div className="modal-action-create">
          <FontAwesomeIcon icon={faXmark} onClick={closeModalCreate} style={{ cursor: "pointer" }} />
        </div>
        <form className="content">
          <div className="name-product">
            <label htmlFor="" className="formbold-form-label">
              Tên sản phẩm
            </label>
            <input type="text" name="firstname" id="firstname" className="formbold-form-input" />
          </div>
        </form>
      </div>
    </div>
  );
}
