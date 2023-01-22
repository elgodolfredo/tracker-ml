import '../css/Product.css';
import { Typography } from '@mui/material';
import Utils from '../utils';

export const ProductLink = (props) => {
  const { format_currency } = Utils;
  const { productLink } = props;
  const getLastPrice = () => {
    const prices = productLink.prices;
    const lastPrice = prices[prices.length - 1];
    return lastPrice ? lastPrice.price : 0;
  }

  return (
    <div className="product">
        <div className="product_image">
            <img src={productLink.image} alt={productLink.name} />
        </div>
        <Typography variant="h6"><a href={productLink.link} target="_blank" rel="noreferrer">{productLink.title}</a></Typography>
        <Typography variant="h6">{productLink.prices.length && format_currency(getLastPrice())}</Typography>
    </div>
  );
}