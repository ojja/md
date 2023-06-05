import React, { useEffect, useState } from 'react';

function ThreedsChallengeRedirectComponent({ response }: any) {
    const [creqValue, setCreqValue] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');

    useEffect(() => {
        if (response) {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(response.html, 'text/html');
            const creqInput = htmlDoc.querySelector('input[name="creq"]');
            if (creqInput) {
                const value = creqInput.value;
                console.log('value', value)
                setCreqValue(value);
            }
            // Set a timeout to submit the form after 2000 milliseconds (2 seconds)
            const timeout = setTimeout(() => {
                const form = document.getElementById('threedsChallengeRedirectForm');
                if (form) {
                    form.submit();
                    if (form.parentNode !== null) {
                        form.parentNode.removeChild(form);
                    }
                }
            }, 2000);

            // Clear the timeout when the component unmounts or when the response changes
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [response]);

    useEffect(() => {
        const handleIframeMessage = (event: MessageEvent) => {
            // Verify that the message comes from the iframe
            if (event.source !== iframe.contentWindow) {
                return;
            }

            // Access the payment status data from the message event
            const paymentStatusData = event.data;
            // console.log("paymentStatusData",paymentStatusData);
            setPaymentStatus(paymentStatusData)
        };

        const iframe = document.getElementById('challengeFrame') as HTMLIFrameElement;
        if (iframe) {
            window.addEventListener('message', handleIframeMessage);

            return () => {
                window.removeEventListener('message', handleIframeMessage);
            };
        }
    }, []);

    return (
        <div>
            <div id="threedsChallengeRedirect" style={{ height: '400px' }}>
                <form id="threedsChallengeRedirectForm" method="POST" action="https://mtf.gateway.mastercard.com/acs/mastercard/v2/prompt" target="challengeFrame">
                    <input type="hidden" name="creq" value={creqValue} />
                </form>
                <iframe id="challengeFrame" name="challengeFrame" width="100%" height="100%" />
            </div>
            {paymentStatus && <div>Payment Status: {paymentStatus}</div>}
        </div>
    );
}

export default ThreedsChallengeRedirectComponent;
