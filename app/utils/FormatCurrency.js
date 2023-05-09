const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  });
  const FormatCurrency = (number) => {
    return CURRENCY_FORMATTER.format(number);
  };
  
  export default FormatCurrency;
  




  // const CURRENCY_SYMBOLS = {
  //   USD: "$",
  //   EGP: "EGP",
  //   QAR: "QAR",
  //   SAR: "SAR",
  // };
  
  // const getCurrency = () => {
  //   const storedCurrency = localStorage.getItem("currency");
  //   return storedCurrency || "USD";
  // };
  
  // const getCurrencySymbol = (currency) => {
  //   return CURRENCY_SYMBOLS[currency] || "$";
  // };
  
  // const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  //   style: "currency",
  //   currency: "USD",
  // });
  
  // const FormatCurrency = (number) => {
  //   const currency = getCurrency();
  //   const currencySymbol = getCurrencySymbol(currency);
  //   const formattedNumber = CURRENCY_FORMATTER.format(number).replace("$", currencySymbol);
  //   return formattedNumber;
  // };
  
  // export default FormatCurrency;
  