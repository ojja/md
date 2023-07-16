import { API_ENDPOINT } from "~/config";
import Cookies from "js-cookie";

const sendAuthenticatedRequest = async (endpoint: string, requestData: any) => {
  try {
    const apiUrl = `${API_ENDPOINT}/${endpoint}`;
    const requestBody = {
      ...requestData,
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const responseData = await response.json();
      return responseData as unknown;
    } else {
      console.log("Request failed");
      return null;
    }
  } catch (error) {
    console.log("An error occurred", error);
    return null;
  }
};

const fetchFilterProducts = async (filterData: any) => {
    const apiUrl = `${API_ENDPOINT}/filter.php`;
    const requestBody = {
      category: filterData.selectedCategories?filterData.selectedCategories:'',
      price_range: [filterData.minPrice, filterData.maxPrice],
      products_per_page: 20,
      page: filterData.pageNumber,
      sort: {
        criteria: filterData.criteria, // Fixed: criteria and arrangement should be properties
        arrangement: filterData.arrangement,
      },
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json", // Added Content-Type header
        },
      });
  
      if (response.ok) {
        console.log("Request successful");
        const responseData = await response.json();
        return responseData;
      } else {
        console.log("Request failed");
        throw new Error("Request failed");
      }
    } catch (error) {
      console.log("An error occurred", error);
      throw error;
    }
  };
  

const forgotPassword = async (user_email: string) => {
  return sendAuthenticatedRequest("my-account/password/forgot-password.php", {
    user_email: user_email,
  });
};

const userRegister = async (formData: any) => {
  return sendAuthenticatedRequest("my-account/register.php", formData);
};

export { fetchFilterProducts, forgotPassword, userRegister };
