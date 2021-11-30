import { productsList } from "../JSON/ProductList";

const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(productsList)
    }, 2000)
})

export default getProducts

