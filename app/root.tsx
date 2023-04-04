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
  useParams,
} from "@remix-run/react";
import styles from './tailwind.css';
import { NavBar } from "./layouts";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App 2",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
        </Layout>
      </body>
    </html>
  );
}


function Layout({ children }) {
  // console.log('params',useParams())
  return (
    <>
      <div>
        header
        {/* <NavBar location={'a'}/> */}
      </div>
      <div className=''>{children}</div>
      <div>
        footer
      </div>
    </>
  )
}


export function ErrorBoundary({ error }) {
  // console.error(error);
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
  );
}