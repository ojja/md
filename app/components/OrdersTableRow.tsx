import Status from './Status'

export default function OrdersTableRow() {
    return (
        <tr>
            <td>#5123685</td>
            <td>09/12/2022</td>
            <td>EGP 5,320</td>
            <td>
                <Status name="On It’s Way" color="yellow" />
                <Status name="Delivered" color="green" />
                <Status name="Canceled" color="red" />
                <Status name="Returned" color="gray" />
            </td>
            <td><a href="/my-account/orders/single" className="block px-4 py-2 text-sm font-semibold text-center text-white rounded-lg whitespace-nowrap bg-slate-900 hover:bg-slate-700">View Details</a></td>
        </tr>
    )
}
