import '../css/Product.css';
import { Typography } from '@mui/material';
import Utils from '../utils';

export const ProductLink = (props) => {
  const { format_currency } = Utils;
  const { productLink } = props;
  return (
    <div className="product">
        <div className="product_image">
            <img src={productLink.image} alt={productLink.name} />
        </div>
        <Typography variant="h6">{productLink.name}</Typography>
        <Typography variant="h6">$ {format_currency(productLink.price)}</Typography>
    </div>
  );
}