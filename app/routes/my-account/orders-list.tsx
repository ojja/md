import { MetaFunction } from "remix";
import OrdersTable from "~/components/OrdersTable";

export default function OrdersList() {
  return (
    <div>
      <div className="flex items-center justify-between py-5 pb-5 border-b-2 border-gray-200 border-solid">
        <h1 className="text-3xl">Orders & Returns</h1>
      </div>
      <div className="pt-10">
        <OrdersTable />
        <div className="w-full">
          <p className="text-[#929292] mb-5 text-lg">There’s no orders yet</p>
          <a href="/" className="inline-flex justify-center px-10 py-2 text-sm font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700">Shop Now</a>
        </div>
      </div>
    </div>
  )
}


export const meta: MetaFunction = () => {
  return {
    title: 'My Orders - My Account | Sitename'
  }
}