const checkLoginStatus = async () => {
  try {
    const response = await fetch(
      "https://cloudhosta.com:68/MitchAPI/my-account/isLogged.php",
      {
        credentials: "include",
      }
    );

    if (response.ok) {
      const responseData = await response.text();
      const isLoggedIn = responseData === "1";

      if (isLoggedIn) {
        console.log("User is logged in");
        // Perform any additional actions for a logged-in user
      } else {
        console.log("User is not logged in");
        // Perform any additional actions for a non-logged-in user
      }
    } else {
      console.log("Request failed with status:", response.status);
      // Handle non-200 status code
    }
  } catch (error) {
    console.log("An error occurred:", error);
    // Handle network errors or other exceptions
  }
};

export { checkLoginStatus };
