import { MetaFunction } from "remix";

export default function OrdersList() {
  return (
    <div>
      orders-list
    </div>
  )
}


export const meta: MetaFunction = () => {
  return {
      title: 'My Orders - My Account | Sitename'
  }
}