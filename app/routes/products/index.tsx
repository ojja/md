import { LoaderFunction } from "@remix-run/cloudflare"
import { Form, Outlet, useLoaderData } from "@remix-run/react";
import { ProductWidget } from "~/components/product/ProductWidget";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, ViewColumnsIcon } from '@heroicons/react/20/solid';
import { v4 } from 'uuid';
import { getProducts, Product } from "~/api/products";
import { Fragment, useState } from "react";
import Breadcrumbs from "~/components/Breadcrumbs";


function classNames(...classes:string[]) {
    return classes.filter(Boolean).join(' ')
}

export const loader: LoaderFunction = async () => {
    return getProducts();
};

export default function shop() {
    return (
        <>
        Products
        <Outlet/>
        </>
    )
}
