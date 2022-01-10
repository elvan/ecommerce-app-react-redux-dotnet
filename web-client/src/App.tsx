const products = [
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
  {
    id: 3,
    name: 'Product 3',
    price: 300,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum quibusdam consequatur suscipit! Minus aliquam, molestiae assumenda iste nobis error, ab recusandae ipsa velit repellendus sint esse explicabo. Dolore, saepe.',
  },
];

function App() {
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
