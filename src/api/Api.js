import axios from "axios";

const http = axios.create({
    baseURL: 'https://63e5fd8683c0e85a868a7f54.mockapi.io/'
})

const Api = {
    getPizzas: () => http.get('card'),
    createProduct: (data) => http.post('card', data),
    deletePizza: (id) => http.delete(`card/${id}`),
}
export default Api