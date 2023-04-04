import { json } from "@remix-run/node";

export type Product = {
    id: string;
    title: string;
    price: string;
    image: string;
    image_small: string;
    category: string;
    rating: string;
    // rate: string;
    // count: string;
}

export async function getProducts(title?: string | null){
    const response = await fetch('https://127.0.0.1/MitchAPI/category.php')
    const products: Product[products] = await response.json();
    return products.filter((product) =>
    title ? product.title.toLowerCase().includes(title.toLowerCase()) : true
  );
}



// export async function getCategoryProducts(slug?: string | null){
//   const response = await fetch('https://127.0.0.1/MitchAPI/filter.php',{
//     method: 'Get',

//   })
//   const products: Product[products] = await response.json();
//   return {products};
// }



export async function getProductById(productId: string) {
    const response = await fetch(`https://dummyjson.com/products/${productId}`)

    const product: Product[] = await response.json();
    // console.log("response",product)
    return { ...product };
  }