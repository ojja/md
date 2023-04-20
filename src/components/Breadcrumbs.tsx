import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React, { Fragment } from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Breadcrumbs({ breadcrumbs, className }) {
    return (
        <nav aria-label="Breadcrumbs" className={classNames(
            "order-first flex space-x-2 text-sm font-semibold items-center capitalize", className
        )}>
            {breadcrumbs.map((item, index, breadcrumbs) =>
                <Fragment key={v4()}>
                    {index === 0 ? "" :
                        <ChevronRightIcon className='w-4 h-4 select-none text-slate-500' />
                    }
                    {index + 1 === breadcrumbs.length ? (
                        <span className={'text-slate-600 hover:text-slate-600'}>{item.name}</span>
                    ) : (
                        <a href={item.href} className={'text-slate-500 hover:text-slate-600'}>{item.name}</a>
                    )}
                </Fragment>
            )}
        </nav>
    )
}
