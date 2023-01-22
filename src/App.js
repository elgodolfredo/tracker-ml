import './App.css';
import { Product } from './components/Product';
import { useEffect, useState } from 'react';
import API from './apis/API'; 
import FormDialog from './components/FormDialog';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { AddCircleOutlined } from '@mui/icons-material';
import { ProductDetail } from './components/ProductDetail';

function App() {

  const [products, setProducts] = useState([]);
  const [addProductDialogIsOpen, setAddProductDialogIsOpen] = useState(false);
  const [addProductLinkDialogIsOpen, setAddProductLinkDialogIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    API.getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

  const addProductLinkToSelectedProduct = (product) => {
    setAddProductLinkDialogIsOpen(false);
  }

  return (
    <div className="App">
      <Typography variant="h4">Productos</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            {products.map((product) => (
              <Box key={product.id}>
                <Product product={product} onClick={()=> handleProductClick(product) } />
              </Box>
            ))}
            <Box sx={{marginTop: '10px', marginLeft: '20px'}}>
              <Button variant="contained" size="medium" startIcon={<AddCircleOutlined />} onClick={()=>{ setAddProductDialogIsOpen(true) }} >Agregar producto</Button>
            </Box>
            <FormDialog 
              open={addProductDialogIsOpen}
              title="Agregar producto"
              onClose={()=>{ setAddProductDialogIsOpen(false) }}
              onConfirm={()=>{ setAddProductDialogIsOpen(false) }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Nombre"
                  type="text"
                  fullWidth
                />
              </FormDialog>
        </Grid>
        <Grid item xs={8}>
          {selectedProduct && <Typography variant="h4">Detalles del producto</Typography>}
          {selectedProduct && <ProductDetail product={selectedProduct} />}
          {selectedProduct && <Button variant="contained" size="medium" startIcon={<AddCircleOutlined />} onClick={()=>{ setAddProductLinkDialogIsOpen(true) }} >Agregar link</Button>}
          <FormDialog 
            open={addProductLinkDialogIsOpen}
            title="Agregar link"
            onClose={()=>{ setAddProductLinkDialogIsOpen(false) }}
            onConfirm={()=>{ addProductLinkToSelectedProduct(selectedProduct) }}>
              <TextField
                autoFocus
                margin="dense"
                id="link"
                label="link"
                type="text"
                fullWidth
              />
          </FormDialog>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
