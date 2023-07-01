import React, { memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API_ENDPOINT } from '~/config';
import ThreedsChallengeRedirectComponent from './payments/ThreedsChallengeRedirectComponent';

const PaymentForm = ({ handleChange, onSubmit, register, errors, setValue }: any) => {
  const { t } = useTranslation();
  const [response, setResponse] = useState(null);
  const scriptLoaded = useRef(false); // Flag to track if script is loaded

  const initializePaymentSession = () => {
    PaymentSession.configure({
      fields: {
        card: {
          number: "#card-number",
          securityCode: "#security-code",
          expiryMonth: "#expiry-month",
          expiryYear: "#expiry-year"
        }
      },
      frameEmbeddingMitigation: ["javascript"],
      callbacks: {
        initialized: function (response) {
          console.log('initialized');
        },
        formSessionUpdate: function (response) {
          // Handle form session update response
          if (response.status) {
            if ("ok" === response.status) {
              console.log("Session updated with data: " + response.session.id);
              document.querySelector(['#card-number','#expiry-month']).style.borderColor = "green";
              if (response.sourceOfFunds.provided.card.securityCode) {
                console.log("Security code was provided.");
              }

              if (response.sourceOfFunds.provided.card.scheme === 'MASTERCARD') {
                console.log("The user entered a Mastercard credit card.");
              }
              // callPay(response.session.id);
              // Set the response.session.id in formData
              // handleChange('sessionId', response.session.id);
              // handleChange({
              //   target: {
              //     name: "sessionId",
              //     value: response.session.id,
              //   },
              // });
              // handleSubmit();

              setValue("sessionId", response.session.id);
              // handleSubmit(onSubmit);
              // onSubmit();

            } else if ("fields_in_error" === response.status) {
              console.log("Session update failed with field errors.");
              if (response.errors.cardNumber) {
                document.querySelector('#card-number').style.borderColor = "red";
                // document.querySelector('#card-number').classList.add("border-red-500", "border");
                // console.log('number')
              }
              if (response.errors.expiryYear) {
                document.querySelector('#expiry-month').style.borderColor = "red";
              }
              if (response.errors.expiryMonth) {
                document.querySelector('#expiry-year').style.borderColor = "red";
              }
              if (response.errors.securityCode) {
                document.querySelector('#security-code').style.borderColor = "red";
              }
            } else if ("request_timeout" === response.status) {
              console.log("Session update failed with request timeout: " + response.errors.message);
            } else if ("system_error" === response.status) {
              console.log("Session update failed with system error: " + response.errors.message);
              console.log("Session update failed with system error: " + response);
            }
          } else {
            console.log("Session update failed: " + response);
          }
        },
        authenticationSuccessful: function (response) {
          debugger;
          // Handle successful authentication
          console.log("3-D Secure authentication successful.");
          // Perform additional actions or submit the form
          // For example: document.querySelector("#paymentForm").submit();
        },
        authenticationFailed: function (response) {
          // Handle failed authentication
          console.log("3-D Secure authentication failed.");
        }
      },
      // order: {
      //   amount: 100.06, // Replace with your order amount
      //   currency: "EGP" // Replace with your currency
      // },
      interaction: {
        displayControl: {
          formatCard: "EMBOSSED",
          invalidFieldCharacters: "REJECT"
        }
      }
    });

    // Add onBlur validation for each field
    const onBlurValidation = (selector, role) => {
      PaymentSession.validate('card', function (allresult) {
        if (allresult.card[role].isValid) {
          console.log("The field is valid");
          document.querySelector(selector).style.borderColor = "green";
        } else {
          console.log("The field is invalid");
          document.querySelector(selector).style.borderColor = "red";
        }
      });
    };

    PaymentSession.onBlur(["card.number", "card.securityCode", "card.expiryYear", "card.expiryMonth"], function (selector, role) {
      onBlurValidation(selector, role);
    });
  };

  useEffect(() => {
    console.log('PaymentForm')
    const script = document.createElement('script');
    script.src = 'https://test-nbe.gateway.mastercard.com/form/version/71/merchant/TESTEGPTEST/session.js';
    if (!scriptLoaded.current) {


      document.head.appendChild(script);
      scriptLoaded.current = true; // Set the flag to true

      script.onload = () => {
        console.log('onload')
        initializePaymentSession();
      };
    }
    console.log('OJJA 2 in effect');
    return () => {
      if (script && script.parentNode === document.head) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const pay = () => {
    PaymentSession.updateSessionFromForm('card');
  };

  console.log('OJJA 2');
  return (
    <div>
      <span>5123450000000008</span>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div className="col-span-4 py-2">
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Card number </label>
          <div className="mt-1">
            <input type="text" id="card-number" placeholder="XXXX XXXX XXXX XXXX" readOnly className="block w-full py-2 pl-3 text-gray-900 border border-gray-300 rounded-md input-field placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className='py-2'>
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Expiry month </label>
          <div className="mt-1">
            <input type="text" id="expiry-month" placeholder="MM" readOnly className="block w-full py-2 pl-3 text-gray-900 border border-gray-300 rounded-md input-field placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div className='py-2'>
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> Expiry year </label>
          <div className="mt-1">
            <input type="text" id="expiry-year" placeholder="YY" readOnly className="block w-full py-2 pl-3 text-gray-900 border border-gray-300 rounded-md input-field placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div className="col-span-2 py-2">
          <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900"> CSV </label>
          <div className="mt-1">
            <input type="text" id="security-code" placeholder="XXX" readOnly className="block w-full py-2 pl-3 text-gray-900 border border-gray-300 rounded-md input-field placeholder:text-gray-400 sm:text-sm sm:leading-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PaymentForm);
