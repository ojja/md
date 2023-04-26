import useRecentView from "~/stores/wishtList";

export default function RecentlyViewedProducts() {
    const {
        recentItems,
    } = useRecentView();
    console.log('recentItems', recentItems)
    return (
        <div className="mt-10 bg-white border-t-2">
            <div className="container px-4 py-16 mx-auto sm:py-24 sm:px-6">
                <h2 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">Recently Viewed Products</h2>
                <div className="flex">
                    {recentItems.map((product) => (
                        <div>
                            <img
                                src={product.thumbnail}
                                alt={product.slug}
                                className="object-cover object-center w-full h-full"
                            />
                            <div key={product.id}>{product.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
