import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import Product from '../models/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random() * 1000,
          name: 'New Product',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: 100,
          pictureUrl: 'https://picsum.photos/200/300',
          quantityInStock: 99,
        },
      ];
    });
  }

  return (
    <div className='app'>
      <Typography variant='h1'>EcommerceApp</Typography>
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
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;
