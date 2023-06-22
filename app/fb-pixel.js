import { FB_PIXELID, FB_Access_Token } from "./config";

let isPixelInitialized = false;
let accessToken = FB_Access_Token;
let pixelId = FB_PIXELID;

export const initFacebookPixel = () => {
  if (isPixelInitialized) {
    return;
  }

  // Initialize the Facebook Pixel
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  // Initialize the Facebook Conversion API
  fbq("dataProcessingOptions", ["LDU"], 1, 1000);
  fbq("init", pixelId);
  fbq("track", "PageView");

  isPixelInitialized = true;
};

export const trackAddToCart = (currency, value) => {
  const data = {
    data: [
        {
          event_name: 'AddToCart',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          user_data: {
            ph: [
              null
            ]
          },
          custom_data: {
            currency: 'EGP',
            value: '142.52',
          },
        },
      ],
    };

  fetch(
    `https://graph.facebook.com/v17.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log("AddToCart event tracked successfully");
      } else {
        console.error("Failed to track AddToCart event:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error tracking AddToCart event:", error);
    });
};

// Export pixelId for other files to access if needed
export { pixelId };
