import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API_ENDPOINT } from '~/config';
import ThreedsChallengeRedirectComponent from './payments/ThreedsChallengeRedirectComponent';

const PaymentForm = ({ handleChange, handleSubmit, register, errors }: any) => {
  const { t } = useTranslation();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    console.log('here')
    const script = document.createElement('script');
    script.src = 'https://test-nbe.gateway.mastercard.com/form/version/71/merchant/TESTEGPTEST/session.js';
    document.head.appendChild(script);

    script.onload = () => {
      // Configure the PaymentSession
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
            // Handle initialization response
          },
          formSessionUpdate: function (response) {
            // Handle form session update response
            if (response.status) {
              if ("ok" === response.status) {
                console.log("Session updated with data: " + response.session.id);

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

              } else if ("fields_in_error" === response.status) {
                console.log("Session update failed with field errors.");
                if (response.errors.cardNumber) {
                  console.log("Card number invalid or missing.");
                }
                if (response.errors.expiryYear) {
                  console.log("Expiry year invalid or missing.");
                }
                if (response.errors.expiryMonth) {
                  console.log("Expiry month invalid or missing.");
                }
                if (response.errors.securityCode) {
                  console.log("Security code invalid.");
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
            debugger;
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

      PaymentSession.onBlur(["card.number", "card.nameOnCard", "card.securityCode", "card.expiryYear", "card.expiryMonth"], function (selector, role) {
        onBlurValidation(selector, role);
      });
      // Remove readOnly attribute from input fields
      const inputFields = document.querySelectorAll('.input-field');
      inputFields.forEach((field) => {
        field.removeAttribute('readOnly');
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const pay = () => {
    PaymentSession.updateSessionFromForm('card');
  };

  return (
    <div>
      <div>Please enter your payment details:</div>
      <span>5123450000000008</span>
      {/* <ThreedsChallengeRedirectComponent response={response} /> */}
      <h3>Credit Card</h3>
      <div>
        Card Number:{" "}
        <input
          type="text"
          id="card-number"
          className="input-field"
          title="card number"
          aria-label="enter your card number"
          tabIndex="1"
          readOnly
          {...register('cardNumber', {
            required: { value: true, minLength: 10, message: t('fields.cardNumber_required') }
          })}
        />
        {errors?.cardNumber && errors.cardNumber.type === "required" && (
          <p className="mt-1 text-xs text-red-500">
            {errors.cardNumber.message}
          </p>
        )}
      </div>
      <div>
        Expiry Month:
        <input
          type="text"
          id="expiry-month"
          className="input-field"
          title="expiry month"
          aria-label="two digit expiry month"
          tabIndex="2"
          readOnly
          {...register('expiry_month', {
            required: { value: true, minLength: 10, message: t('fields.expiry_month_required') }
          })}
        />
        {/* Add error handling for expiry month */}
        {errors?.expiry_month && errors.expiry_month.type === "required" && (
          <p className="mt-1 text-xs text-red-500">
            {errors.expiry_month.message}
          </p>
        )}
      </div>
      <div>
        Expiry Year:
        <input
          type="text"
          id="expiry-year"
          className="input-field"
          title="expiry year"
          aria-label="two digit expiry year"
          tabIndex="3"
          readOnly
          {...register('expiry_year', {
            required: { value: true, minLength: 10, message: t('fields.expiry_year_required') }
          })}
        />
        {/* Add error handling for expiry year */}
        {errors?.expiry_year && errors.expiry_year.type === "required" && (
          <p className="mt-1 text-xs text-red-500">
            {errors.expiry_year.message}
          </p>
        )}
      </div>
      <div>
        Security Code:
        <input
          type="text"
          id="security-code"
          className="input-field"
          title="security code"
          aria-label="three digit CCV security code"
          tabIndex="4"
          readOnly
          {...register('security_code', {
            required: { value: true, minLength: 10, message: t('fields.security_code_required') }
          })}
        />
        {/* Add error handling for security code */}
        {errors?.security_code && errors.security_code.type === "required" && (
          <p className="mt-1 text-xs text-red-500">
            {errors.security_code.message}
          </p>
        )}
      </div>
      <div>
        <button id="payButton" type="button" onClick={pay}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
