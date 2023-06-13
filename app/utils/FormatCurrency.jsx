const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EGP",
  style: "currency",
});
const CURRENCY_FORMATTER2 = new Intl.NumberFormat(undefined, {
  currency: "EGP",
  style: "currency",
});

//  const FormatCurrency = (number) => {
//   const parsedNumber = parseFloat(number);

//   const formattedCurrency = CURRENCY_FORMATTER.format(parsedNumber);
//   const currencySymbol = formattedCurrency.match(/[^\d.,]/g).join("");
//   const [wholeNumber, decimalPart] = formattedCurrency.match(/\d+/g);

//   return (
//     <>
//     <span className="currency text-sm font-normal">{currencySymbol}</span>
//     <span className="whole-number text-2xl font-semibold ltr:-ml-0.5 rtl:-mr-0.5">{wholeNumber}</span>
//     <span className="decimal-part text-sm font-normal">{decimalPart}</span>
//   </>);
// };s
// const FormatCurrency = (number: string | number, currencyClass: string[] | undefined, wholeNumberClass: undefined, decimalPartClass: undefined) => {
//   const parsedNumber = parseFloat(number);

//   const formattedCurrency = CURRENCY_FORMATTER.format(parsedNumber);
//   const currencySymbol = formattedCurrency.match(/[^\d.,]/g).join("");
//   const [wholeNumber, decimalPart] = formattedCurrency.match(/\d+/g);

//   return (
//     <>
//       <span className={`currency text-sm font-normal ${currencyClass}`}>{currencySymbol}</span>
//       <span className={`whole-number text-2xl font-semibold ltr:-ml-0.5 rtl:-mr-0.5 ${wholeNumberClass}`}>{wholeNumber}</span>
//       <span className={`decimal-part text-sm font-normal ${decimalPartClass}`}>{decimalPart}</span>
//     </>
//   );
// };

// export default FormatCurrency;

const FormatCurrency = (number, currencySymbol = "", tailwindClasses = ["", "", ""]) => {
  const parsedNumber = parseFloat(number);

  const formattedCurrency = CURRENCY_FORMATTER.format(parsedNumber);
  const [wholeNumber, decimalPart] = formattedCurrency.match(/\d+/g);

  return (
    <>
      <span className={`currency ${tailwindClasses[0]}`}>{currencySymbol}</span>
      <span className={`whole-number ${tailwindClasses[1]}`}>{wholeNumber}</span>
      <span className={`decimal-part ${tailwindClasses[2]}`}>{decimalPart}</span>
    </>
  );
};


export default FormatCurrency;

export const FormatCurrency2 = (number) => {
  const parsedNumber = parseFloat(number);
  return CURRENCY_FORMATTER2.format(parsedNumber);  
};






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
  