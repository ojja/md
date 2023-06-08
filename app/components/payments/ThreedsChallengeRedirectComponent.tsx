import { useEffect, useState } from 'react';

function ThreedsChallengeRedirectComponent({ response }: any) {
    const [creqValue, setCreqValue] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [orderData, setOrderData] = useState<any>(null);
    const [messageReceived, setMessageReceived] = useState(false);


    useEffect(() => {
        if (response) {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(response.html, 'text/html');
            const creqInput = htmlDoc.querySelector('input[name="creq"]');
            if (creqInput) {
                const value = creqInput.value;
                console.log('value', value);
                setCreqValue(value);
            }
            const timeout = setTimeout(() => {
                const form = document.getElementById('threedsChallengeRedirectForm');
                if (form) {
                    form.submit();
                }
            }, 2000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [response]);

    const custIframe = document.getElementById('challengeFrame') as HTMLIFrameElement;
    // const custIframe = document.getElementById('challengeFrame').contentWindow.document;
    // console.log('custIframe 1',custIframe.contentWindow)
    // debugger;
    console.log('custIframe', custIframe)
    useEffect(() => {
        const handleIframeMessage = (event: MessageEvent) => {
            // Verify that the message comes from the iframe
            // if(custIframe)
            console.log('iframe in EFF', iframe)

            if (event.source !== iframe.contentWindow) {
                return;
            }
            const iframeDocument = custIframe || iframe.contentWindow.document;
            const preTag = iframeDocument.querySelector('pre');
            const jsonData = JSON.parse(preTag.textContent);
            console.log('Parsed data:', jsonData);

            // Access the payment status data from the message event
            const paymentStatus = event.data;
            setPaymentStatus(paymentStatus);

        };

        const iframe = document.getElementById('challengeFrame') as HTMLIFrameElement;
        if (iframe) {
            // Wait for the iframe to load
            window.addEventListener('load', () => {
                console.log('wiat load')
                // Get the first iframe element
                const iframe = document.getElementsByTagName('iframe')[0];

                // Check if the iframe exists and is loaded
                if (iframe && iframe.contentWindow) {
                    // Access the iframe's document and modify its body style
                    const iframeDocument = iframe.contentWindow.document;
                    iframeDocument.body.style.backgroundColor = 'blue';
                }
            });
            // window.addEventListener('message', handleIframeMessage);
            window.addEventListener("message", (event) => {
                handleIframeMessage
                const data = event.data;
                console.log(`Received message: ${JSON.stringify(data)}`);
                console.log('iframe in EFF new fun', iframe)
                if (iframe && iframe.contentWindow) {
                    const iframeDocument = iframe.contentWindow.document;
                    const preTag = iframeDocument.querySelector('pre');
                
                    if (preTag) {
                      // Access the content of the <pre> tag
                      const content = preTag.textContent;
                      console.log('Content of <pre> tag:', content);
                    } else {
                      console.log('Could not find <pre> tag inside the iframe.');
                    }
                  }
                // console.log('iframe in EFF new fun2', JSON.parse(iframe))
                console.log('iframe in EFF second', iframe?.contentWindow);
                // const x = document.getElementsByTagName("iframe")[0].contentDocument;
                // x.document.body.style.backgroundColor = "blue";
            });
            window.addEventListener("load", () => {
                console.log('iframe in EFF LOAD 2', iframe)
            });
            return () => {
                window.removeEventListener('message', handleIframeMessage);
            };
        }
    }, []);

    const [message, setMessage] = useState('')

    // This hook is listening an event that came from the Iframe
    useEffect(() => {
        const handler = (ev: MessageEvent<{ type: string, message: string }>) => {
            console.log('ev', ev)

            if (typeof ev.data !== 'object') return
            if (!ev.data.type) return
            if (ev.data.type !== 'button-click') return
            if (!ev.data.message) return

            setMessage(ev.data.message)
        }

        window.addEventListener('message', handler)

        // Don't forget to remove addEventListener
        return () => window.removeEventListener('message', handler)
    }, [])
    console.log('message', message)

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
