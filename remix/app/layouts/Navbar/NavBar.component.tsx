import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({nav_items}) {
    //console.log("NAVBAR COMP",page_items);
  return (
    <div>
        <ul className='list-disc list-inside'>
            {nav_items.map((nav_item, index) =>
                <li key={index}>
                    <Link to={'/cat'+nav_item.main_category_route}>
                      {nav_item.main_category_title}</Link>
                      {nav_item.has_mega && <ul>
                      {nav_item.mega_group.mega_repeater.map((group_item,index) =><li  key={index}><Link to={'/cat'+group_item.mega_item_route}>{group_item.mega_item_title}</Link></li>)}
                      </ul>}
                </li>
                )
            }
        </ul>
    </div>
  )
}
