import {data} from '../data'

export const getProductById = (id: number) => {

    return data.products.find(item => item.id === id)
}

export const getAllProducts = () => {

    return data.products
}

export const getProductByCategory = (idCategory: number) => {

    return data.products.filter(item => item.idCategory === idCategory)
}