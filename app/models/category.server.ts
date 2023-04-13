
// export async function getCategoryProducts(slug?: string | null) {
//     const response = await fetch('https://honorable-nachos.localsite.io/MitchAPI/category.php', {
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


export async function getCategoryProducts(categorySlug: string, pageNumber: number): Promise<void> {
    const url: string = 'https://www.cloudhosta.com:61/MitchAPI/category.php';
    const data: any = { category: categorySlug, products_per_page: 20, page_number: pageNumber};
    const options: RequestInit = {
      method: 'POST',
      headers: {
        // "Authorization": `Basic ${btoa("survey:makeshift")}`,
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