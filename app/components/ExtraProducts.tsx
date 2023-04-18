import { json, LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { v4 } from "uuid";
import { getExtraProducts } from "~/api/extraProducts";
import { getProducts } from "~/api/products";
import { ProductWidget } from "./product/ProductWidget";


// export const loader = async () => {
//     const categorySlug = 'all-clothing'
//     const pageNumber = 1
//     return json({
//       products: await getExtraProducts(categorySlug, pageNumber),
//       categorySlug,
//       pageNumber,
//     });
//   };



//   interface Props {
//     categorySlug: string;
//     pageNumber: number;
//   }


//   export const loader: LoaderFunction = async () => {
//     return getProducts();
// };

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function ExtraProducts({ categorySlug, pageNumber, title }: Props) {
    const products = [
        {
            "id": 24674,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-65",
            "price": "5800",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-D2HWA401S0155899-black.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-D2HWA401S0155899-black-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-D2HWA401S0155899-black-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-D2HWA401S0155899-black-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-D2HWA401S0155899-black-3.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 24862,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-61",
            "price": "28500",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-602988S2247-beige.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-602988S2247-beige-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-602988S2247-beige-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-602988S2247-beige-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-602988S2247-beige-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-602988S2247-beige-4.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 24865,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-62",
            "price": "12050",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-603084SOW70-pink.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-603084SOW70-pink-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-603084SOW70-pink-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-603084SOW70-pink-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-603084SOW70-pink-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-603084SOW70-pink-4.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-603084SOW70-pink-5.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 24959,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-58",
            "price": "6400",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K2AA82NLHZ-black.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K2AA82NLHZ-black-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2AA82NLHZ-black-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2AA82NLHZ-black-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2AA82NLHZ-black-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2AA82NLHZ-black-4.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2AA82NLHZ-black-5.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2AA82NLHZ-black-6.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 25004,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-56",
            "price": "7600",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K2A6E2JXTZ-olive.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K2A6E2JXTZ-olive-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2A6E2JXTZ-olive-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2A6E2JXTZ-olive-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2A6E2JXTZ-olive-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2A6E2JXTZ-olive-4.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K2A6E2JXTZ-olive-5.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 25055,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-35",
            "price": "3900",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K3A7F2JQGZ-rosy.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K3A7F2JQGZ-rosy-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A7F2JQGZ-rosy-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A7F2JQGZ-rosy-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A7F2JQGZ-rosy-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A7F2JQGZ-rosy-4.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 25100,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-27",
            "price": "2400",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-LW119328410-navy.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-LW119328410-navy-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-LW119328410-navy-4.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 23112,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-15",
            "price": "2950",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3KEA133J3WZ-golden.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3KEA133J3WZ-golden-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3KEA133J3WZ-golden-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3KEA133J3WZ-golden-2.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 22955,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-9",
            "price": "4650",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K3A223N4DZ-fantasia.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/thumb-3K3A223N4DZ-fantasia-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-4.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/06\/gall-3K3A223N4DZ-fantasia-5.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 20071,
            "name": "DRESS",
            "title": "DRESS",
            "slug": "dress-48",
            "price": "5050",
            "sale_price": "",
            "main_image": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/thumb-6H3A113J3MZ-black.jpg",
            "thumbnail": "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/thumb-6H3A113J3MZ-black-150x150.jpg",
            "images": [
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/gall-6H3A113J3MZ-black-1.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/gall-6H3A113J3MZ-black-2.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/04\/gall-6H3A113J3MZ-black-3.jpg",
                "https:\/\/www.lecollezioni-eg.com\/wp-content\/uploads\/2021\/07\/gall-6H3A113J3MZ-black-4.jpg"
            ],
            "type": "variable"
        }
    ];
    // console.log('products????',products)
    //   const shuffledProducts = shuffleArray(products);

    return (
        <div className="mt-10 bg-white border-t-2">
            <div className="container px-4 py-16 mx-auto sm:py-24 sm:px-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title ? title : 'Customers also purchased'}</h2>
                <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">

                    {products.sort(() => Math.random() - 0.5)
                        .slice(0, 5)
                        .map((productData: any) => (
                            <ProductWidget product={productData} key={productData.id} />
                        ))}
                </div>
            </div>
        </div>
    )
}
