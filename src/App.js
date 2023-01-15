import './App.css';
import { Product } from './components/Product';
import { useEffect, useState } from 'react';
import API from './apis/API'; 
import { Typography } from '@mui/material';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="App">
      <Typography variant="h4">Products</Typography>
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
    </div>
  );
}

export default App;
