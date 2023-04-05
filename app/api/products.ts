import { json } from "@remix-run/cloudflare";
import { woo } from "~/lib/woocommerce";

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
  const response = await fetch('https://honorable-nachos.localsite.io/MitchAPI/category.php', {
    method: 'POST',
    body: JSON.stringify({ "attributes": {}, "category": "*", "price_range": [0, 1000], "products_per_page": 90, "page_number": 1 }),
    headers: new Headers({
      "Authorization": `Basic ${btoa("survey:makeshift")}`
    }),
  })

    const products: Product[products] = await response.json();
    return products.filter((product) =>
    title ? product.title.toLowerCase().includes(title.toLowerCase()) : true
  );
}



// export async function getCategoryProducts(slug?: string | null){
//   const response = await fetch('https://honorable-nachos.localsite.io/MitchAPI/filter.php',{
//     method: 'Get',

//   })
//   const products: Product[products] = await response.json();
//   return {products};
// }



export async function getProductById(productSlug: string) {
  // const response = await fetch(`https://dummyjson.com/products/${productSlug}`)

  try {
    const response = await fetch(`https://honorable-nachos.localsite.io/wp-json/wc/v3/products/${productSlug}?consumer_key=ck_a531be63b4c4d4782740f48d0269f20ada341fb7&consumer_secret=cs_235666485463566634375908b90462cf65905941`, {
      headers: new Headers({
        "Authorization": `Basic ${btoa("survey:makeshift")}`
      }),
    })
    const jsonResponse = await response.json();
    return {
      ...jsonResponse as {},
      totalpages: response.headers['x-wp-totalpages'],
      wpTotal: response.headers['x-wp-total'],
    }
  } catch (error) {
    console.log("Response Status:", error.response.status);
    console.log("Response Headers:", error.response.headers);
    console.log("Response Data:", error.response.data);
  }
  }