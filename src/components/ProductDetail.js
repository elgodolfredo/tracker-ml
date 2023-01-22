import { useEffect, useState } from 'react';
import '../css/Product.css';
import { ProductLink } from './ProductLink';
import API from '../apis/API';

export const ProductDetail = (props) => {
  const { product } = props;
  const [ productLinks, setProductLinks ] = useState([]);

  useEffect(() => {
    API.getProductLinks(product.id).then((productLinks) => {
      console.log(product.id)
      setProductLinks(productLinks);
    });
  }, [product]);

  return (
    <div className="product">
        {/* grafico */}
        {productLinks.map((productLink) => (
          <ProductLink key={productLink.id} productLink={productLink} />
        ))}
    </div>
  );
}