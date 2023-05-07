
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Status({ name, color }: any) {
    return (
        // <span
        //     className={classNames(
        //         color==='yellow' ? 'bg-yellow-500 text-black':'',
        //         color==='green' ? 'bg-green-900 text-white':'',
        //         color==='gray' ? 'bg-gray-500 text-white':'',
        //         color==='red' ? 'bg-red-500 text-white':'',
        //         'px-2 rounded-full font-light text-sm'
        //     )}
        // >
        //     {name}
        // </span>
        <span
            className={classNames(
                color === 'yellow' ? 'text-yellow-900' : '',
                color === 'green' ? 'text-green-900' : '',
                color === 'gray' ? 'text-gray-900' : '',
                color === 'red' ? 'text-red-900' : '',
                'relative inline-block px-3 py-1 font-semibold leading-tight text-sm'
            )}
        >
            <span
                className={classNames(
                    color === 'yellow' ? 'bg-yellow-200' : '',
                    color === 'green' ? 'bg-green-200' : '',
                    color === 'gray' ? 'bg-gray-200' : '',
                    color === 'red' ? 'bg-red-200' : '',
                    'absolute inset-0 opacity-50 rounded-full'
                )}
            ></span>
            <span className="relative">{name}</span>
        </span>
    )
}
