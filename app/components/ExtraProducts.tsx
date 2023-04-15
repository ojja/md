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
            "id": 41510,
            "name": "طاجن أم علي صغير",
            "title": "طاجن أم علي صغير",
            "slug": "umm-ali-tagine-with-nuts-from-abdel-rahim-koueider-small",
            "price": "35",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/10\/طاجن-أم-علي-صغير-thumb-.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/10\/طاجن-أم-علي-صغير-thumb--150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/10\/gall-طاجن-أم-علي-صغير-1.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/10\/gall-طاجن-أم-علي-صغير-2.jpg"
            ],
            "type": "simple"
        },
        {
            "id": 40898,
            "name": "علبه عسل نحل كاجو",
            "title": "علبه عسل نحل كاجو",
            "slug": "a-box-of-assorted-oriental-treats-sweetened-with-honey-from-abdel-rahim-koueider",
            "price": "310",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-كاجو-1-thumb.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-كاجو-1-thumb-150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-كاجو-1-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-كاجو-2-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-كاجو-3-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-كاجو-4-gall.jpg"
            ],
            "type": "simple"
        },
        {
            "id": 40899,
            "name": "علبه عسل نحل فستق",
            "title": "علبه عسل نحل فستق",
            "slug": "assorted-oriental-treats-sweetened-with-honey-by-abdel-rahim-koueider-box",
            "price": "430",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-فستق-1-thumb.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-فستق-1-thumb-150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-فستق-1-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-فستق-2-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-فستق-3-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/09\/علبه-عسل-نحل-فستق-4-gall.jpg"
            ],
            "type": "simple"
        },
        {
            "id": 26659,
            "name": "علبة شرقى لايت",
            "title": "علبة شرقى لايت",
            "slug": "a-box-of-light-assorted-oriental-sweets-by-abdel-rahim-koueider",
            "price": "480",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/02\/less-sugar-box-thumb.webp",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/02\/less-sugar-box-thumb-150x150.webp",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2022\/02\/less-sugar-box-gall.webp"
            ],
            "type": "simple"
        },
        {
            "id": 3499,
            "name": "طاجن أم علي",
            "title": "طاجن أم علي",
            "slug": "zaatar-croissant-by-abdel-rahim-koueider-piece-4",
            "price": "250",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/طاجن-أم-علي-thumb-.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/طاجن-أم-علي-thumb--150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/gall-طاجن-أم-علي-1.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/gall-طاجن-أم-علي-2.jpg"
            ],
            "type": "simple"
        },
        {
            "id": 3498,
            "name": "ليالي لبنان بالكنافة",
            "title": "ليالي لبنان بالكنافة",
            "slug": "%d9%84%d9%8a%d8%a7%d9%84%d9%8a-%d9%84%d8%a8%d9%86%d8%a7%d9%86-%d8%a8%d8%a7%d9%84%d9%83%d9%86%d8%a7%d9%81%d8%a9",
            "price": "220",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4018007-thumb.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4018007-thumb-150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4018007-gall.jpg"
            ],
            "type": "simple"
        },
        {
            "id": 2612,
            "name": "علبة بقلاوة تركي مشكل",
            "title": "علبة بقلاوة تركي مشكل",
            "slug": "a-box-of-assorted-turkish-baklava-by-abdel-rahim-koueider",
            "price": "470",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/علبة-بقلاوة-تركي-مشكل-1-thumb.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/علبة-بقلاوة-تركي-مشكل-1-thumb-150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/علبة-بقلاوة-تركي-مشكل-1-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/علبة-بقلاوة-تركي-مشكل-2-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/علبة-بقلاوة-تركي-مشكل-3-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/علبة-بقلاوة-تركي-مشكل-4-gall.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4005046-gall-1.jpg"
            ],
            "type": "simple"
        },
        {
            "id": 2060,
            "name": "طبق عيش السرايا",
            "title": "طبق عيش السرايا",
            "slug": "aish-al-saraya-by-abdul-rahim-koueider-tray",
            "price": "150",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4004005-thumb.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4004005-thumb-150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4004005-gall-3.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4004005-gall-2.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4004005-gall-1.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 1697,
            "name": "بلح الشام",
            "title": "بلح الشام",
            "slug": "balah-al-sham-by-abd-al-rahim-koueider-weight",
            "price": "37.5",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/بلح-الشام-thumb-.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/بلح-الشام-thumb--150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/gall-بلح-الشام-1.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/gall-بلح-الشام-2.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/gall-بلح-الشام-3.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4004001-gall-3.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 1698,
            "name": "ملبن قشطة",
            "title": "ملبن قشطة",
            "slug": "malban-with-cream-from-abdel-rahim-koueider-weight",
            "price": "50",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/ملبن-قشطة-thumb-.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/ملبن-قشطة-thumb--150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/gall-ملبن-قشطة-1.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/gall-ملبن-قشطة-2.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/gall-ملبن-قشطة-3.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4004007-gall-1.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 1699,
            "name": "حلاوة الجبن",
            "title": "حلاوة الجبن",
            "slug": "halawa-el-jibn-by-abdel-rahim-koueider-weight",
            "price": "60",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/حلاوة-الجبن-thumb-.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/حلاوة-الجبن-thumb--150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/حلاوة-الجبن-gall-2.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/حلاوة-الجبن-gall-1.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/حلاوة-الجبن-gall-3.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4004010-gall-3.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 1700,
            "name": "عين الست",
            "title": "عين الست",
            "slug": "%d8%b9%d9%8a%d9%86-%d8%a7%d9%84%d8%b3%d8%aa",
            "price": "42.5",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4004011-thumb.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4004011-thumb-150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/04\/4004011-gall-3.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/4004011-gall-1.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/4004011-gall-2.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 1693,
            "name": "شرحات فستق",
            "title": "شرحات فستق",
            "slug": "%d8%b4%d8%b1%d8%ad%d8%a7%d8%aa-%d9%81%d8%b3%d8%aa%d9%82",
            "price": "0",
            "sale_price": "",
            "main_image": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4003023-thumb.jpg",
            "thumbnail": "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4003023-thumb-150x150.jpg",
            "images": [
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4003023-gall-3.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/03\/4003023-gall-4.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/4003023-gall-2.jpg",
                "https:\/\/www.ar-koueider.com\/wp-content\/uploads\/2021\/02\/4003023-gall-1.jpg"
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
