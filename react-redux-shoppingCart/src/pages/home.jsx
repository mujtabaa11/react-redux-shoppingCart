import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch("/data/data.json"); // Fetching product data from the local JSON file

        const result = await response.json();
        setProducts(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setErrorMsg(error.message || "Failed to fetch data.");
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <Circles height="120" width="120" color="green" visible={true} />
        <span className="mt-4 text-lg">Loading data...please wait!</span>
      </div>
    );
  }

  if (errorMsg) {
    return <div className="text-center text-red-500">{`Error: ${errorMsg}`}</div>;
  }

  return (
    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
      {products?.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <ProductTile product={product} />
          </div>
        ))
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
}
