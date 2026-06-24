import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context1/SearchContext";

const Navbar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 shadow w-100">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand fs-2 fw-bold" href="#">
          ShopEasy
        </a>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-4">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/productsPage">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>

          {/* Search */}
          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                navigate("/productsPage");
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                width: hover ? "350px" : "250px",
                transition: "0.4s",
                border: hover ? "2px solid blue" : "1px solid gray",
                boxShadow: hover ? "0px 0px 10px lightblue" : "none",
              }}
            />
          </form>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button
  className="btn btn-outline-light"
  onClick={() => navigate("/login")}
>
  Login
</button>

            <button
              className="btn btn-warning fw-bold"
              onClick={() => navigate("/cart")}
            >
              Cart
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;