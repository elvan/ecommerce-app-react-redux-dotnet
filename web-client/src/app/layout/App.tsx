import { useEffect, useState } from 'react';
import Product from '../models/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className='app'>
      <h1>EcommerceApp</h1>
      <p
        style={{
          color: '#333',
          backgroundColor: '#eee',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        This is a sample application for an ecommerce website.
      </p>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
