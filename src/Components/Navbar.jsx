import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context1/SearchContext";

const Navbar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3 shadow">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          ShopEasy
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse mt-3 mt-lg-0"
          id="navbarNav"
        >
          {/* Links */}
          <ul className="navbar-nav mx-auto text-center gap-lg-4">
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
          <form className="d-flex my-3 my-lg-0 mx-lg-3">
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
                width: window.innerWidth > 768
                  ? hover
                    ? "350px"
                    : "250px"
                  : "100%",
                transition: "0.4s",
                border: hover ? "2px solid #0d6efd" : "1px solid gray",
                boxShadow: hover
                  ? "0px 0px 10px lightblue"
                  : "none",
              }}
            />
          </form>

          {/* Buttons */}
          <div className="d-flex flex-column flex-lg-row gap-2">
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