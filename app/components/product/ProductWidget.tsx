import { memo, useState } from "react";
// import { Link } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { ProductData } from "types";
import FormatCurrency from "~/utils/FormatCurrency";
import WishlistBtn from "~/components/WishlistBtn";
import ProgressiveImage from "~/components/ProgressiveImage";
import Img from "~/components/icons/Img";
import Quickview from "~/components/Quickview";
import AddToCartSimple from "~/components/AddToCartSimple";
import { Link } from "@remix-run/react";
// import { Link } from "react-router-dom";

type ProductWidgetProps = {
  product?: ProductData;
  wishlist?: any;
  isItemInWishlist?: any;
};

const ProductWidget = ({ product, wishlist }: ProductWidgetProps) => {
  const { t } = useTranslation();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [openQuick, setOpenQuick] = useState(false);

  const productTitle = product?.name ? product?.name : product?.title;
  const imageSrc = product?.main_image ? product.main_image.replace('/uploads/', '/uploads-webpc/uploads/').concat('.webp') : product?.thumbnail;
  const imageSrcSmall = product?.main_image_small ? product.main_image_small.replace('/uploads/', '/uploads-webpc/uploads/').concat('.webp') : product?.thumbnail;

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  let itemID;
  let salePrice = null;
  let productPrice = null;
  if (product?.type === "simple" || product?.type === "variable") {
    itemID = product.id;
    productPrice = product.price;
    salePrice = product.sale_price;
  }

  const handleQuickviewToggle = () => {
    setOpenQuick(!openQuick);
  };

  // console.clear();
  return (
    <div className={`relative flex flex-col group`} id={`${wishlist ? `wishlist-item-${product?.id}` : ''}`}>
      <div className="relative z-10 w-full overflow-hidden bg-gray-200 rounded-md min-h-80 group-hover:opacity-75">
        <Link
          to={`/products/${product?.slug}`}
          prefetch="intent"
          onClick={handleLinkClick}
          className={`block aspect-w-4 aspect-h-3 lg:h-80 ${product?.slug ? product.slug : "pointer-events-none"}`}
        >
          {imageSrc ? (
            <ProgressiveImage
              src={imageSrc}
              placeholder={imageSrcSmall}
              alt={product?.name}
              className="self-center object-cover object-center w-full h-full m-auto lg:h-full lg:w-full"
            />
          ) : (
            <span className="flex items-center justify-center h-full">
              <Img />
            </span>
          )}
        </Link>
        <div className="absolute bottom-0 left-0 right-0 flex items-end">
          <button
            onClick={handleQuickviewToggle}
            type="button"
            className="relative w-full px-4 py-2 text-sm text-gray-900 bg-white bg-opacity-75 rounded-md opacity-0 focus:opacity-100 group-hover:opacity-100"
          >
            {t("common.quick_view")}
          </button>
        </div>
      </div>
      <div className="flex justify-between mt-4 mb-4">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link
              prefetch="intent"
              onClick={handleLinkClick}
              to={`/products/${product?.slug}`}
            >
              <span aria-hidden="true" className={`absolute inset-0 z-1 select-none ${product?.slug ? "" : "pointer-events-none"}`} />
              {productTitle}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product?.category}</p>
          <p className="mt-1 text-sm text-gray-500">{product?.id}</p>
        </div>
        <div className="text-sm font-medium text-gray-900">
          {salePrice !== '' && salePrice != productPrice ? (
            <p className="flex flex-col items-end">
              <span className="align-middle"><FormatCurrency value={salePrice} /></span>
              <del className="ml-2 text-xs text-red-400 line-through align-middle"><FormatCurrency value={productPrice} /></del>
            </p>
          ) : (
            <p className="">
              <FormatCurrency value={productPrice} />
            </p>
          )}
        </div>
      </div>
      <div className="relative z-1">
        {product?.type !== "variable" ? (
          <AddToCartSimple
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700"
            product={{
              id: product.id,
              thumbnail: imageSrc,
              slug: product.slug,
              price: salePrice !== '' && salePrice != productPrice ? salePrice : productPrice,
            }}
            disabled={product?.availability && product?.availability !== "in-stock"}
          />
        ) : (
          <button
            onClick={handleQuickviewToggle}
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700"
          >
            {t("common.quick_view")}
          </button>
        )}
      </div>
      <WishlistBtn product={product} inWishlistPage={wishlist} />
      {openQuick && <Quickview openQuick={openQuick} openModal={handleQuickviewToggle} product={product} />}
    </div>
  );
};

export default memo(ProductWidget);
