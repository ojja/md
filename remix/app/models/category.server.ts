
// export async function getCategoryProducts(slug?: string | null) {
//     const response = await fetch('https://127.0.0.1/MitchAPI/category.php', {
//         method: 'Post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "category": "uncategorized",
//             "products_per_page": 20,
//             "page_number": 1

//         })
//     })
//     console.log("response>>>>", response.json())
//     //   const products: Product[products] = await response.json();
//     return { response };
// }


export async function getCategoryProducts(): Promise<void> {
    const url: string = 'https://127.0.0.1/MitchAPI/category.php';
    const data: any = { category: 'uncategorized', products_per_page: 20, page_number: 1};
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
    //   console.log(result);
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }