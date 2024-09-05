import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export default function Filter() {
  const handleFilterStatus = (value) => {
    console.log(value.target.value);
  };
  return (
    <div>
      <div className="favorite-section-header">
        <h1 className="section-title">Mục yêu thích của bạn</h1>
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
        </div>

        <div className="filter-options">
          <select className="filter-option" onChange={handleFilterStatus}>
            <option value={"all"}>Tất cả</option>
            <option value={"inStock"}>Còn hàng</option>
            <option value={"outOfStock"}>Hết hàng</option>
          </select>

          <select className="filter-option">
            <option>Danh mục</option>
            <option>Rượu</option>
            <option>Hạt</option>
            <option>Hoa quả</option>
          </select>

          <select className="filter-option">
            <option>Đã thêm gần đây</option>
            <option>Mới nhất</option>
            <option>Cũ nhất</option>
          </select>

          <FontAwesomeIcon icon={faList} />
        </div>
      </div>
    </div>
  );
}
