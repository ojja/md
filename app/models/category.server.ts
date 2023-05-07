import { API_ENDPOINT } from "~/config";

export async function getCategoryProducts(categorySlug: string, pageNumber: number = 1, pageSize: number = 20) {
  const url: string = `${API_ENDPOINT}/category.php`;
  const data: any = { category: categorySlug, products_per_page: pageSize, page_number: pageNumber};
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
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}


export async function getFilterProducts(categorySlug: string, pageNumber: number): Promise<unknown> {
  const url: string = 'https://lecollezioni-eg.com/MitchAPI/test.php';
  const data: any = { category: categorySlug,price_range:[0,20000], products_per_page: 20, page: 1 };
  const options: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    console.log('result',result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}
