interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  interface ApiResponse {
    success: boolean;
    message: string;
    data: {
      products: Product[];
      total_products: number;
      total_pages: number;
    };
  }
  
  export async function getExtraProducts(
    categorySlug: string,
    pageNumber: number
  ): Promise<Product[]> {
    const url: string = "https://www.ar-koueider.com/MitchAPI/category.php";
    const data: any = {
      category: categorySlug,
      products_per_page: 20,
      page_number: pageNumber,
    };
    const options: RequestInit = {
      method: "POST",
      headers: {
        // "Authorization": `Basic ${btoa("survey:makeshift")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch(url, options);
      const result: ApiResponse = await response.json();
      // Extract the products array from the API response
      const products: Product[] = result.data.products;
      return products;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  }
  