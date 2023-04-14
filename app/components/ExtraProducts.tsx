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
            "id": 2995,
            "name": "Piscelina Dress",
            "title": "Piscelina Dress",
            "slug": "piscelina-dress",
            "price": "4499",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5764.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5764-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5760.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4144.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5748.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5751.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5764.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5765.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5771.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2989,
            "name": "Aqua Dress",
            "title": "Aqua Dress",
            "slug": "aqua-dress",
            "price": "3999",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5718.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5718-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5731.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5712.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5707.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5725.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5718.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5735.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2983,
            "name": "Ary Dress",
            "title": "Ary Dress",
            "slug": "ary-dress",
            "price": "4499",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5606.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5606-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5606.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5617.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5619.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5628.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5607.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5622.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2977,
            "name": "Taura Dress",
            "title": "Taura Dress",
            "slug": "taura-dress",
            "price": "4299",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5464.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5464-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5464.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5469.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5473-scaled.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5475-scaled.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5479-scaled.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5483.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2965,
            "name": "Cancy Dress",
            "title": "Cancy Dress",
            "slug": "cancy-dress",
            "price": "4799",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5782.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5782-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5778.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5793.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5782.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4142.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5785.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4145.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2971,
            "name": "Gem Dress",
            "title": "Gem Dress",
            "slug": "gem-dress",
            "price": "4499",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5543.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5543-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5543.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A55542.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5546.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5544.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5549.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5551.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2959,
            "name": "Leona Dress",
            "title": "Leona Dress",
            "slug": "leona-dress",
            "price": "3999",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5682.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5682-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5669.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4146.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5696.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5674.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5682.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5698.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2953,
            "name": "Virgie Dress",
            "title": "Virgie Dress",
            "slug": "virgie-dress",
            "price": "3999",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5575.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5575-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5575.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5584.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5577.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5594.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5578.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5583.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2947,
            "name": "Librella Dress",
            "title": "Librella Dress",
            "slug": "librella-dress",
            "price": "4299",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5876.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/03\/018A5876-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4139.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4138.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5871.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5874.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5877.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5876.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5882.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2945,
            "name": "Scorpia Dress",
            "title": "Scorpia Dress",
            "slug": "scorpia-dress",
            "price": "3499",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5499.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5499-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5497.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5499.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5500.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5504.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5508.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5509.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5515.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2939,
            "name": "Sagitta Dress",
            "title": "Sagitta Dress",
            "slug": "sagitta-dress",
            "price": "4499",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5818.jpg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5818-150x150.jpg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5813.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5818.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5824.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/018A5852.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4137.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4140.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4141.jpg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/02\/IMG-4143.jpg"
            ],
            "type": "variable"
        },
        {
            "id": 2724,
            "name": "Laia Set - Black",
            "title": "Laia Set - Black",
            "slug": "laia-set-black",
            "price": "1599",
            "sale_price": "",
            "main_image": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/743CB646-F619-4B8B-AB8E-B6DD45772CDD.jpeg",
            "thumbnail": "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/743CB646-F619-4B8B-AB8E-B6DD45772CDD-150x150.jpeg",
            "images": [
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/98D8B99F-9BC2-4A03-BC23-B64C64FBD432.jpeg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/ADC5D8D3-8FD9-4FD9-9F2C-CE67B3378957.jpeg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/947559AF-6384-42BD-871F-0B8839B76283.jpeg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/D6E77B27-1791-4206-B229-6389B52964A4.jpeg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/CEFD8399-2CA6-4207-874E-DC96A4AD3553.jpeg",
                "https:\/\/www.cloudhosta.com:92\/wp-content\/uploads\/2023\/01\/743CB646-F619-4B8B-AB8E-B6DD45772CDD.jpeg"
            ],
            "type": "variable"
        }
    ];
    // console.log('products????',products)
    //   const shuffledProducts = shuffleArray(products);

    return (
        <div className="bg-white border-t-2 mt-10">
            <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title ? title : 'Customers also purchased'}</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">

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
