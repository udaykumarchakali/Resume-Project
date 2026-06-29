import hero from "../assets/HERO.mp4";
import { useNavigate } from "react-router-dom";
import "../Components/Navbar.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src={hero} type="video/mp4" />
        </video>

        <div className="hero-content">
          <h1>New Fashion Collection</h1>

          <p>Trendy Dresses For Every Style</p>

          <button
            className="btn4"
            onClick={() => navigate("/productsPage")}
          >
            Shop Now
          </button>
        </div>
      </div>

      
    </>
  );
};

export default Home;