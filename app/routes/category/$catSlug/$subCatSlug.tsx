import { json, LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ slug: params.subCatSlug, params })
};

export default function CatSlug() {
  const { slug, params } = useLoaderData();
  console.log('params Base child inside>', params)
  return (
    <div>
      Cat Sl:::::{slug}
    </div>
  )
}
