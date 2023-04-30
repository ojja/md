
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Status({ name, color }: any) {
    return (
        <span
            className={classNames(
                color==='yellow' ? 'bg-yellow-300 text-black':'',
                color==='green' ? 'bg-green-300 text-white':'',
                color==='gray' ? 'bg-gray-300 text-white':'',
                color==='red' ? 'bg-red-300 text-white':'',
                'py-1 px-2 rounded-lg font-light'
            )}
        >
            {name}
        </span>
    )
}
