import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

export default function Home() {
  const getURL = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchProducts(url) {
    try {
      setLoading(true);
      const response = await fetch(getURL);
      const data = await response.json();

      if (data) {
        console.log(data);
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(e);
      setErrorMsg(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <Circles
          height={"120"}
          width={"120"}
          color="green"
          visible={true}
        />
        <span>Loading data...please wait!</span>
      </div>
    );
  }
  if (errorMsg != "") {
    return <div>{`Error: ${errorMsg}`}</div>;
  }

  return (
    <div>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id}>
                <ProductTile product={product} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
