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
import styles2 from 'slick-carousel/slick/slick.css';
import Footer from "./layouts/footer";
import NavBar from "./layouts/navbar";

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles },{ rel: 'stylesheet', href: styles2 }];
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


function Layout({ children }: { children: React.ReactNode }) {
  // console.log('params',useParams())
  return (
    <>
      <NavBar/>
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  )
}

// const error: string = "Error message";
interface Props {
  error: Error | null
}
export function ErrorBoundary({ error }: Props) {
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