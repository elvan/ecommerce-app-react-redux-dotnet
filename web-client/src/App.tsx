import { useState } from 'react';

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum quibusdam consequatur suscipit! Minus aliquam, molestiae assumenda iste nobis error, ab recusandae ipsa velit repellendus sint esse explicabo. Dolore, saepe.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum quibusdam consequatur suscipit! Minus aliquam, molestiae assumenda iste nobis error, ab recusandae ipsa velit repellendus sint esse explicabo. Dolore, saepe.',
  },
];

function App() {
  const [products, setProducts] = useState(DUMMY_PRODUCTS);

  function addProduct() {
    setProducts((prevProducts) => {
      const newId = prevProducts.length + 1;
      const newProduct = {
        id: newId,
        name: 'Product ' + newId,
        price: 100 * newId,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum quibusdam consequatur suscipit! Minus aliquam, molestiae assumenda iste nobis error, ab recusandae ipsa velit repellendus sint esse explicabo. Dolore, saepe.',
      };

      return [...prevProducts, newProduct];
    });
  }

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
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
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
