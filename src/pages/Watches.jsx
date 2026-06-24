import   { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './detail.css'
const Watch = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <>
  <div className="container">
      <div className="row">
        <div className="details">
          <div className="card">
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </div>

        <div className="row">
         <h1 className="title">{product.title}</h1>
          <p className="descri">{product.description}</p>
          <h3 className="price">Price: ${product.price}</h3>
          <button
  className="buy"
  onClick={() => alert("You Buy the Product")}
>
  Buy Now
</button>
        </div>
      </div>
    </div>
      
      </>
  );
};  

export default Watch;