import "./App.css";
import Header from "./Component/Header";
import Filter from "./Component/Filter";
import GiftItem from "./Component/GiftItem";
import ModalProductDetail from "./Component/ModalProductDetail";
function App() {
  const dataProduct = [
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      image: "./public/1.png",
    },
    {
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VND",
      discount: "99",
      image: "./public/2.png",
    },
    {
      title: "Ngũ hạt thập cẩm, 135g, hũ",
      price: "133.000 VND",
      discount: "99",
      image: "./public/3.png",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      image: "./public/4.png",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      image: "./public/5.png",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      image: "./public/6.png",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      image: "./public/7.png",
    },
  ];
  return (
    <div className="content">
      <Header />
      <Filter />
      <GiftItem dataProduct={dataProduct} />
      <ModalProductDetail />
    </div>
  );
}

export default App;
