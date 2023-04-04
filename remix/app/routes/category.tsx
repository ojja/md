import { json, LoaderFunction } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react";

export default function categoryIndex() {
  return (
    <Outlet />
  )
}