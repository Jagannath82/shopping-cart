import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const fetchAllProducts = async () => {
    try{
        const products = await api.get("/product");
        console.log(products);
        return products;
    }catch(err){
        console.log(err);
    }
}

export const createProducts = async (product) => {
    try{
        const products = await api.post("/product", product);
        return products;
    }catch(err){
        console.log(err);
    }
}