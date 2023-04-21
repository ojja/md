import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useParams,
} from "@remix-run/react";
import styles from './tailwind.css';
import stylesRtl from './tailwind.rtl.css';
import stylesBase from './base.css';
// import styles2 from 'slick-carousel/slick/slick.css';
// import styles2 from 'slick-carousel/slick/slick-theme.css';
// import styles2 from 'slick-carousel/slick/slick.css';
import Footer from "./layouts/footer";
import NavBar from "./layouts/navbar";
import { useState } from "react";


export const links: LinksFunction = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const cssLink = currentLang === 'en' ? styles : stylesRtl;
  // const { request } = useParams();
  // console.log('request',request)
  // const langPrefix = request.path.startsWith('/ar') ? 'rtl' : 'ltr';
  const langPrefix = 'ltr';

  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesBase },
    { rel: 'stylesheet', href: langPrefix === 'rtl' ? stylesRtl : undefined },

    
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App 2",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [language, setLanguage] = useState("en");
  // const handleLangChange = () => {
  //   setLanguage((prevLanguage) => prevLanguage === "en" ? "ar" : "en");
  // };

  const [isRtl, setIsRtl] = useState(false);
  const navigate = useNavigate();

  // const handleLangChange = () => {
  //   setIsRtl((prevIsRtl) => !prevIsRtl);
  //   // const newUrl = isRtl ? location.pathname.replace("/ar", "") : `/ar${location.pathname}`;
  //   // navigate(newUrl, { replace: true });
  // };
  return (
    <html lang={language}>
      <head>
        <Meta />
        <Links />
        {/* <link rel="stylesheet" href={isRtl ? stylesRtl : styles} /> */}
      </head>
      <body className="box-border oultine-none">
        <NavBar 
          // onLangChange={handleLangChange}
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