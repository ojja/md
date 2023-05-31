// import { json, LoaderFunction } from "@remix-run/cloudflare"
import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getCategoryProducts, getFilterProducts } from "~/models/category.server";
import { useState } from "react";
import { v4 } from 'uuid';
import Breadcrumbs from "~/components/Breadcrumbs";
import { ProductWidget } from "~/components/product/ProductWidget";
import { ProductWidgetWithVariation } from "~/components/product/ProductWidgetWithVariation";
import { Site_Title } from "~/config";
import { useTranslation } from "react-i18next";
import ShopListTop from "~/components/ShopListTop";
import Filters from "~/components/Filters";
import Sort from "~/components/Sort";



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const meta: MetaFunction = ({ params }: any) => {
  return {
    title: `Category Page | ${params.catSlug} - ${Site_Title}`
  }
}

export const loader = async ({ params }: any) => {
  const categorySlug = params.catSlug;
  const pageNumber = 1;
  const perPage = 20;
  let products = [];
  try {
    //@ts-ignore no product type defined
    products = await getCategoryProducts(categorySlug, pageNumber, perPage);
    console.log('products', products)
  } catch (e) {
    console.log('error', e);
  }
  return json({
    products,
    categorySlug,
  });
};

export default function CategorySlug() {
  const { t } = useTranslation();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [grid, setGrid] = useState(false);
  const cat = 'Category';
  const breadcrumbs = {
    pages: [
      { name: 'Home', href: '/' },
      { name: 'Woman', href: '#' },
      { name: 'Parent Category', href: '#' },
      { name: cat, href: '#' }
    ]
  }


  const { products: initialProducts } = useLoaderData();
  const [products, setProducts] = useState(initialProducts);
  console.log('products in', products)

  return (
    <div className="bg-white">
      <main className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className='pt-5 '>
          <Breadcrumbs breadcrumbs={breadcrumbs.pages} className="pb-4" />
          <ShopListTop grid={grid} setGrid={setGrid} setMobileFiltersOpen={setMobileFiltersOpen} title='' />
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4"> */}
            <div className="">

              <div className="top  flex justify-between">
                <Filters />
                <Sort />
              </div>


              {/* Product grid */}
              <div className="relative z-10 lg:col-span-3 ">
                <div className={classNames(
                  grid ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-4',
                  'grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 mt-6'
                )}
                >

                  {products?.map((productData: any) => (
                    <>
                      <ProductWidget product={productData} key={v4()} />
                      {/* <ProductWidgetWithVariation product={productData} key={v4()} /> */}
                    </>
                  ))}
                </div>

                <div className="flex items-center justify-center mt-10 loadmore">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center justify-center whitespace-nowrap">
                    Load More
                  </button>
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center justify-center whitespace-nowrap">
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                    </svg>
                    Loading...
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
