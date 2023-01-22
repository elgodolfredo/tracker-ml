function API() {

    const productExamples = [
        {
            id: 1,
            name: 'Mampara baño',
            avg_price : 55000,
        },
        {
            id: 2,
            name: 'Zapatillas',
            avg_price : 10000,
        },
        {
            id: 3,
            name: 'Juego sanitarios',
            avg_price : 156000,
        },
    ];
    const productLinks = [
        {
            id: 1,
            product_id: 1,
            link: 'https://www.mercadolibre.com.ar/mampara-bano-vidrio-templado-6mm-80x80x195-cm-azul/p/MLA18210050',
            price: 55000,
            date: '2021-10-01',
        },
        {
            id: 2,
            product_id: 1,
            link: 'https://www.mercadolibre.com.ar/mampara-bano-vidrio-templado-6mm-80x80x195-cm-azul/p/MLA18210050',
            price: 60000,
            date: '2021-10-02',
        },
    ];
    this.getProducts = () => {
        // return fetch('http://localhost:3000/products').then((response) => {
        //     return response.json();
        // });
        return new Promise((resolve, reject) => {
            resolve(productExamples);
        });
    };

    this.getProductLinks = (productId) => {
        // return fetch(`http://localhost:3000/products/${productId}/product_links`).then((response) => {
        //     return response.json();
        // });
        return new Promise((resolve, reject) => {
            resolve(productLinks.filter((productLink) => {
                return productLink.product_id === productId;
            }));
        });
    }
    

}
const api = new API();
export default api;