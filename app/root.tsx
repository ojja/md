import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useNavigate,
  useParams,
} from "@remix-run/react";
import styles from './tailwind.css';
import stylesRtl from './tailwind.rtl.css';
import stylesBase from './base.css';
import stylesSlick from 'slick-carousel/slick/slick.css';
import stylesSlickTheme from 'slick-carousel/slick/slick-theme.css';
import Footer from "./layouts/footer";
import NavBar from "./layouts/navbar";
import { useEffect, useState } from "react";
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./components/LanguageSwitcher";
import { initFacebookPixel } from './fb-pixel';
import { FB_PIXELCODE } from "./config";



export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesBase },
    // { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesSlick },
    { rel: 'stylesheet', href: stylesSlickTheme }
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "PWA",
  viewport: "width=device-width,initial-scale=1",
});


export default function App() {
  const [language, setLanguage] = useState(i18n.language);

  const { t } = useTranslation();

  const [isRtl, setIsRtl] = useState(false);
  console.log('i18n.language', i18n.language)
  if (typeof window !== "undefined") {
    initFacebookPixel(FB_PIXELCODE);
  }
  
  // useEffect(() => {
  //   !function(f,b,e,v,n,t,s)
  //   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //   n.queue=[];t=b.createElement(e);t.async=!0;
  //   t.src=v;s=b.getElementsByTagName(e)[0];
  //   s.parentNode.insertBefore(t,s)}(window, document,'script',
  //   'https://connect.facebook.net/en_US/fbevents.js');
  //   fbq('init', '6517989738225028');
  //   fbq('track', 'PageView');
  // }, []);


  return (
    <html lang={language} dir={i18n.language === "ar" ? 'rtl' : 'ltr'}>
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href={i18n.language === "ar" ? stylesRtl : styles} />
      </head>
      <body className="box-border oultine-none">
        <NavBar
        />
        <main className="relative z-10">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html >
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
          <Meta />
          <Links />
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
  return (
    <html className="h-full">
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <main
          className="min-h-full bg-center bg-cover sm:bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
          }}
        >
          <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 sm:py-24 lg:px-8 lg:py-48">
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
        <Scripts />
      </body>
    </html>
  );
}