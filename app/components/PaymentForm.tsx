import React, { useEffect } from 'react';

const PaymentForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://test-gateway.mastercard.com/form/version/71/merchant/TOKENIZATION/session.js?debug=true';
    document.head.appendChild(script);

    script.onload = () => {
      // Configure the PaymentSession
      PaymentSession.configure({
        fields: {
          card: {
            number: "#card-number",
            securityCode: "#security-code",
            expiryMonth: "#expiry-month",
            expiryYear: "#expiry-year",
            nameOnCard: "#cardholder-name"
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
        //   authentication: function (response) {
        //     // Handle 3-D Secure authentication response
        //     if (response.type === 'ACS') {
        //       // Display the 3-D Secure authentication form
        //       // You can create a form with the provided `response.html` and submit it to the `response.url`
        //       console.log('3-D Secure authentication required');
        //       console.log('HTML form:', response.html);
        //       console.log('ACS URL:', response.url);
        //     } else if (response.type === 'FRICTIONLESS') {
        //       // 3-D Secure authentication successful, continue with the payment
        //       console.log('3-D Secure authentication successful');
        //       console.log('Payment authorized:', response.authenticated);
        //       console.log('Cardholder verification:', response.cavv);
        //     } else if (response.type === 'FAILURE') {
        //       // 3-D Secure authentication failed
        //       console.log('3-D Secure authentication failed');
        //       console.log('Failure reason:', response.failureReason);
        //     }
        //   }
        authenticationSuccessful: function (response) {
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
        order: {
          amount: 1000, // Replace with your order amount
          currency: "EGP" // Replace with your currency
        },
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
      <h3>Credit Card</h3>
      <div>
        Card Number: <input type="text" id="card-number" className="input-field" title="card number" aria-label="enter your card number" value="" tabIndex="1" readOnly />
      </div>
      <div>
        Expiry Month:<input type="text" id="expiry-month" className="input-field" title="expiry month" aria-label="two digit expiry month" value="" tabIndex="2" readOnly />
      </div>
      <div>
        Expiry Year:<input type="text" id="expiry-year" className="input-field" title="expiry year" aria-label="two digit expiry year" value="" tabIndex="3" readOnly />
      </div>
      <div>
        Security Code:<input type="text" id="security-code" className="input-field" title="security code" aria-label="three digit CCV security code" value="" tabIndex="4" readOnly />
      </div>
      <div>
        Cardholder Name:<input type="text" id="cardholder-name" className="input-field" title="cardholder name" aria-label="enter name on card" value="" tabIndex="5" readOnly />
      </div>
      <div>
        <button id="payButton" onClick={pay}>Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentForm;
