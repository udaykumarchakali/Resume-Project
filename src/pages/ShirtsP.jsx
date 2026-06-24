import { useEffect, useMemo, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context1/SearchContext";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);
  const navigate = useNavigate();

   
  const { search } = useContext(SearchContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((data) => setShirts(data.products || []));
  }, []);

  const filteredProducts = useMemo(() => {
    return shirts.filter((item) =>
      item?.title?.toLowerCase().includes(search?.toLowerCase() || "")
    );
  }, [shirts, search]);

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
        <h1 className="Head">Premium Clothes</h1>
      </center>

      <div className="container">
        {filteredProducts.length === 0 ? (
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            No Shirts Found 😕
          </h3>
        ) : (
          filteredProducts.map((item) => (
            <div
              className="card"
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.thumbnail} alt={item.title} />

              <div className="card-body">
                <h3>{item.title}</h3>
                <p>${item.price}</p>

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

export default Shirts;  