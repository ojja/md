import { Link } from "@remix-run/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import WishList from "~/components/WishList";
import { Site_Title } from "~/config";
import { FormatCurrency } from "~/utils/FormatCurrency";

export const meta = () => {
  return {
    title: `My Wishtlist | ${Site_Title}`
  }
}

export default function wishlist() {
  return (
    <div>
      <WishList />
    </div>
  )
}