import { useEffect, useState } from 'react';
import agent from '../../app/api/agent';
import Product from '../../app/models/product';
import ProductList from './ProductList';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    agent.Catalog.list()
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
