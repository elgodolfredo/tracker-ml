import { useEffect, useState } from 'react';
import '../css/Product.css';
import { ProductLink } from './ProductLink';
import API from '../apis/API';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const ProductDetail = (props) => {
  const { product } = props;
  const [ productLinks, setProductLinks ] = useState([]);

  useEffect(() => {
    API.getProductLinks(product.id).then((productLinks) => {
      setProductLinks(productLinks);
    });
  }, [product]);

  const generateAvgPriceByDate = (productsLink) => {
    const pricesByDate = {};
    productsLink.forEach((productLink) => {
      const prices = productLink.prices;
      prices.forEach((price) => {
        const date = new Date(price.date).toISOString();
        if (pricesByDate[date]) {
          pricesByDate[date].push(price.price);
        } else {
          pricesByDate[date] = [price.price];
        }
      });
    });
    const avgPrices = [];
    for (const date in pricesByDate) {
      const prices = pricesByDate[date];
      const avgPrice = prices.reduce((a, b) => a + b, 0) / prices.length;
      avgPrices.push({label : date, data: avgPrice});
    }
    console.log(avgPrices)
    return avgPrices;
  }


  return (
    <div className="product">
        <Line data={{
          labels: generateAvgPriceByDate(productLinks).map((avgPrices) => avgPrices.label),
          datasets: [
            {
              label: 'Precio promedio por fecha',
              data: generateAvgPriceByDate(productLinks).map((avgPrices) => avgPrices.data),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            },
          ]
        }} />
        {productLinks.map((productLink) => (
          <ProductLink key={productLink.id} productLink={productLink} />
        ))}
    </div>
  );
}