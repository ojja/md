import OrdersTableRow from "~/components/OrdersTableRow";

export default function OrdersTable() {
    return (
        <table className="w-full text-left">
            <tr>
                <th>Order Number</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
                <th></th>
            </tr>
            <OrdersTableRow/>
        </table>
    )
}
