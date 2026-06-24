import { useEffect, useMemo, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context1/SearchContext";

const Watches = () => {
  const [watches, setWatches] = useState([]);
  const navigate = useNavigate();

 
  const { search } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((res) => res.json())
      .then((data) => setWatches(data.products || []));
  }, []);

  const filteredProducts = useMemo(() => {
    return watches.filter((item) =>
      item?.title?.toLowerCase().includes(search?.toLowerCase() || "")
    );
  }, [watches, search]);

  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Successfully Added");
    navigate("/cart");
  };

  return (
    <>
      <hr className="line" />

      <center>
        <h1 className="Head">Premium Watches</h1>
      </center>

      <div className="container">
        {filteredProducts.length === 0 ? (
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            No Watches Found 😕
          </h3>
        ) : (
          filteredProducts.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="card-img"
              />

              <div className="card-body">
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>

                <button
                  className="btn8"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Watches;