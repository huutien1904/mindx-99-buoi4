import "./App.css";
import Header from "./Component/Header";
import Filter from "./Component/Filter";
import GiftItem from "./Component/GiftItem";
function App() {
  const dataProduct = [
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      rate: 3,
      price: "140.000 VND",
      size: "small",
      discount: "99",
      image: "./public/1.png",
      status: "inStock",
      type: "alcohol",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    },
    {
      title: "Hạnh nhân rang muối biển, 240g, hũ",
      rate: 3,
      size: "small",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      price: "150.000 VND",
      discount: "99",
      image: "./public/2.png",
      status: "outOfStock",
      type: "seed",
    },
    {
      title: "Ngũ hạt thập cẩm, 135g, hũ",
      price: "160.000 VND",
      discount: "99",
      image: "./public/3.png",
      status: "outOfStock",
      type: "seed",
      rate: 3,
      size: "small",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      status: "outOfStock",
      type: "seed",
      image: "./public/4.png",
      rate: 3,
      size: "small",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      status: "outOfStock",
      type: "seed",
      image: "./public/5.png",
      rate: 3,
      size: "small",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      status: "outOfStock",
      type: "seed",
      image: "./public/6.png",
      rate: 3,
      size: "small",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      status: "outOfStock",
      type: "seed",
      image: "./public/7.png",
      rate: 3,
      size: "small",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    },
    {
      title: "Granola siêu hạt ăn kiêng 15% yến mạch",
      price: "133.000 VND",
      discount: "99",
      status: "outOfStock",
      type: "seed",
      image: "./public/7.png",
      rate: 3,
      size: "small",
      detail:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
    },
  ];
  return (
    <div className="content">
      <Header />
      <Filter />
      <GiftItem dataProduct={dataProduct} />
    </div>
  );
}

export default App;
