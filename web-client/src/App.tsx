import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

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
        {products.map((product: any) => (
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
