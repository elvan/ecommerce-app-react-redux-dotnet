import Product from '../../app/models/product';

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <h2>Catalog</h2>
      <button onClick={addProduct}>Add Product</button>
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
    </>
  );
}
