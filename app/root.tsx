import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLoaderData, } from "@remix-run/react";
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
// import i18n from 'i18next';
// import { initReactI18next, useTranslation } from 'react-i18next';
import { CurrencyProvider } from "./CurrencyContext";
// import en from "./locales/en.json";
// import en from "~/locales/en.json";
// import ar from "~/locales/ar.json";

// import { useChangeLanguage } from "remix-i18next";
import { useTranslation } from "react-i18next";
import i18next from "~/i18next.server";

import styles from './tailwind.css';
import stylesRtl from './tailwind.rtl.css';
import stylesBase from './base.css';
import criticalCSS from './critical.css';
import stylesSlick from 'slick-carousel/slick/slick.css';
import stylesSlickTheme from 'slick-carousel/slick/slick-theme.css';

import Footer from "./layouts/footer";
import NavBar from "./layouts/navbar";
import { initializeAnalytics } from './analytics';
import { json } from "@remix-run/server-runtime";
import { LoaderArgs } from "remix";
import { i18nCookie } from "./cookie";

export async function loader({ request }: LoaderArgs) {
  let locale = await i18next.getLocale(request);
  return json({ locale });
}
export function useChangeLanguage(locale: string) {
  let { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

export let handle = {
  i18n: "common",
};
export const scripts = () => {
  return [];
};
export const links = () => {
  // const isRtl = i18n.language === 'ar';
  const isRtl = 'ar';
  const isSingleProductPage = typeof window !== "undefined" && window.location.pathname.startsWith("/products/");

  return [
    // Preload the critical CSS
    { rel: 'preload', as: 'style', href: criticalCSS },

    // Preload and set the correct CSS based on RTL language
    { rel: 'preload', as: 'style', href: isRtl ? stylesRtl : styles },

    // Preload other stylesheets
    { rel: 'preload', as: 'style', href: stylesRtl },
    { rel: 'preload', as: 'style', href: stylesBase },
    { rel: 'preload', as: 'style', href: stylesSlick },

    // The other links remain unchanged
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'stylesheet', as: 'style', href: 'https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400;500;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' },
    { rel: 'stylesheet', href: stylesBase },
    { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'stylesheet', href: stylesSlick },
    { rel: 'stylesheet', href: isRtl ? stylesRtl : styles },
    // { rel: 'stylesheet', href: stylesSlickTheme },
  ].filter(Boolean);
}


export const meta = () => ({
  charset: "utf-8",
  title: "PWA",
  viewport: "width=device-width,initial-scale=1",
});
export const headers = {
  "Cache-Control": "public, max-age=31536000",
};

let locale = 'ar';
export default function App() {
  // const { t } = useTranslation();
  // Get the locale from the loader
  // let { locale } = useLoaderData<typeof loader>();
  // console.log('locale>',locale)
  let { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  // useChangeLanguage(locale);

  // const [language, setLanguage] = useState(i18n.language);
  const [isRtl, setIsRtl] = useState(false);

  // debugger;
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function calculateMainHeight() {
      const screenHeight = window.innerHeight;
      const navbarElement = document.querySelector('header');
      const footerElement = document.querySelector('footer');

      if (navbarElement && footerElement && mainRef.current) {
        const navbarHeight = navbarElement.offsetHeight;
        const footerHeight = footerElement.offsetHeight;
        const minHeight = 700; // Specify your desired minimum height here
        const mainHeight = Math.max(screenHeight - navbarHeight - footerHeight, minHeight);
        mainRef.current.style.minHeight = `${mainHeight}px`;
      }
      setIsLoading(false); // DOM is fully rendered, set isLoading to false
    }
    if (typeof window !== 'undefined') {
      calculateMainHeight();
      window.addEventListener('resize', calculateMainHeight);
      window.addEventListener("load", () => {
        setIsLoading(false); // Page has fully loaded, set isLoading to false
      });
      return () => {
        window.removeEventListener('resize', calculateMainHeight);
      };
    }
  }, []);

  useEffect(() => {
    initializeAnalytics();
  }, []);
  useEffect(() => {
    // debugger;
    console.log(`Language changed to ${i18n.language}`);
    // console.log(`Language changed to datsss${i18n}`);
    if (typeof window !== 'undefined') {
      // setLanguage(i18n.language);
      setIsRtl(i18n.language === 'ar');
    }
  }, [i18n.language]);

  useEffect(() => {
    // Create a new style element for critical CSS
    const criticalStyleTag = document.createElement("style");

    // Add your critical CSS content here
    const criticalCSSContent = `
      body{font-size:14px;}button{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button{text-transform:none}@charset "UTF-8";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}button{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button{text-transform:none}button,[type=button]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}p{margin:0}svg{display:block;vertical-align:middle}*,:before,:after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:;--tw-brightness:;--tw-contrast:;--tw-grayscale:;--tw-hue-rotate:;--tw-invert:;--tw-saturate:;--tw-sepia:;--tw-drop-shadow:;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}.container{width:100%}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.relative{position:relative}.z-20{z-index:20}.mx-auto{margin-left:auto;margin-right:auto}.box-border{box-sizing:border-box}.flex{display:flex}.h-10{height:2.5rem}.h-16{height:4rem}.h-6{height:1.5rem}.w-6{width:1.5rem}.items-center{align-items:center}.justify-center{justify-content:center}.rounded-md{border-radius:.375rem}.border-b{border-bottom-width:1px}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.bg-primary-600{--tw-bg-opacity:1;background-color:rgb(75 85 99 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}
    `;

    // Append the critical CSS content to the style tag
    criticalStyleTag.appendChild(document.createTextNode(criticalCSSContent));

    // Append the style tag to the document head
    document.head.appendChild(criticalStyleTag);

    // Clean up the style tag when the component unmounts
    return () => {
      document.head.removeChild(criticalStyleTag);
    };
  }, []);


  //   console.clear();
  //   console.log(`
  //   Wᴇʟᴄᴏᴍᴇ ɪɴ
  //   ██████╗░░██╗░░░░░░░██╗░█████╗░
  //   ██╔══██╗░██║░░██╗░░██║██╔══██╗
  //   ██████╔╝░╚██╗████╗██╔╝███████║
  //   ██╔═══╝░░░████╔═████║░██╔══██║
  //   ██║░░░░░░░╚██╔╝░╚██╔╝░██║░░██║
  //   ╚═╝░░░░░░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝
  // `);
  return (
    <CurrencyProvider>
      <html lang={locale} dir={i18n.dir()} className="!overflow-visible">
        <head>
          <link
            rel="stylesheet"
            href={`${criticalCSS}`}
          />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <Meta />
          <Links />
          {/* <link rel="stylesheet" href={i18n.language === "ar" ? stylesRtl : styles} /> */}

        </head>
        <body className={`box-border oultine-none ${i18n.language === "ar" ? 'font-sans-ar rtl' : 'font-sans-en ltr'}`} >

          <NavBar />
          {isLoading ? (
            <div className="loading-screen"><img src="/favicon.ico" className="rotate-center" /></div>
          ) : (
            <>
              <main className="relative z-10" ref={mainRef}>
                <Outlet />
              </main>
              <Footer />
            </>
          )}
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
        </body>
      </html >
    </CurrencyProvider>
  );
}

// const error: string = "Error message";
interface Props {
  error: Error | null
}
export function ErrorBoundary({ error }: Props) {
  // debugger;
  console.error(error);
  if (error) {
    return (
      <html>
        <head>
          <title>Oh no!</title>
        </head>
        <body>
          {/* add the UI you want your users to see */}
          {/* {error} */}
          {error.message}
          <Scripts />
        </body>
      </html>
    )
  }
}

export function CatchBoundary() {
  const caught = useCatch();
  let { i18n } = useTranslation();
  return (
    <CurrencyProvider>
      <html lang={locale} dir={i18n.dir()}>
        <head>
          <Meta />
          <Links />
          <link rel="stylesheet" href={i18n.language === "ar" ? stylesRtl : styles} />
          <title>Oops!</title>
        </head>

        <body className={`box-border oultine-none ${i18n.language === "ar" ? 'font-sans-ar rtl' : 'font-sans-en ltr'}`} >
          <div>
            <NavBar />
          </div>
          <main
            className="min-h-full bg-center bg-cover sm:bg-center"
            style={{
              backgroundImage:
                'url("/images/404.jpg")',
            }}
          >
            <div className="px-4 py-16 mx-auto text-center max-w-[1400px] sm:px-6 sm:py-24 lg:px-8 lg:py-48">
              <p className="text-sm font-semibold tracking-wide text-black text-opacity-50 uppercase">{caught.status} {caught.statusText}</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Uh oh! I think you’re lost.
              </h1>
              <p className="mt-2 text-lg font-medium text-black text-opacity-50">
                It looks like the page you’re looking for doesn't exist.
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-black text-opacity-75 bg-white bg-opacity-75 border border-transparent rounded-md sm:bg-opacity-25 sm:hover:bg-opacity-50"
                >
                  Go back home
                </a>
              </div>
            </div>
          </main>
          <Footer />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </CurrencyProvider>
  );
}