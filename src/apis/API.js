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
    ] 

    this.getProducts = () => {
        // return fetch('http://localhost:3000/products').then((response) => {
        //     return response.json();
        // });
        return new Promise((resolve, reject) => {
            resolve(productExamples);
        });
    };

}
const api = new API();
export default api;