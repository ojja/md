import { MetaFunction } from "remix";
export default function wishlist() {
  return (
    <div>
      wishlist
    </div>
  )
}

export const meta: MetaFunction = () => {
  return {
      title: 'My Wishtlist - Account | Sitename'
  }
}