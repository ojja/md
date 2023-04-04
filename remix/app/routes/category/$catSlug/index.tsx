import { json, LoaderFunction } from "@remix-run/node"
import { Outlet, useLoaderData } from "@remix-run/react";
import { getCategoryProducts } from "~/models/category.server";


type LoaderData = {
  data: Awaited<ReturnType<typeof getCategoryProducts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    data: await getCategoryProducts(),
  });
};

// export const loader: LoaderFunction = async ({ params }) => {
//   return json({ slug: params.catSlug, params })
// };
export default function CategorySlug() {
  const { data } = useLoaderData() as LoaderData;
  // const { slug, params } = useLoaderData();
  console.log('params Base childD>',data)
  return (
    <div>
      Slug index: slug
      <Outlet />
    </div>
  )
}
