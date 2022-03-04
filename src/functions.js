import productList from './assets/product_data.json'


const productLoad = new Promise((resolve, reject) => {
    if (productList !== []){
        setTimeout(() => {
            resolve(productList)
        }, 2000)
    }
    else{
        reject("No hay servicios disponibles.")
    }
  })

export default productLoad