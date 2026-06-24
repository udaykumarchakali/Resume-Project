 import { useNavigate } from "react-router-dom";
import './detail.css'
const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-container">
      <h1>Categories</h1>

      <div className="categories-grid">
        <div
          className="category-card"
          onClick={() => navigate("/Shoesp")}
        >
          <h2>Shoes</h2>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/Watchesp")}
        >
          <h2>Watches</h2>
        </div>

        <div
          className="category-card"
          onClick={() => navigate("/ShirtsP")}
        >
          <h2>Shirts</h2>
        </div>
      </div>
    </div>
  );
};

export default Categories;