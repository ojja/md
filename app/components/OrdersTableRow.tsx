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
            <td><a href="#" className="block text-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700">View Details</a></td>
        </tr>
    )
}
