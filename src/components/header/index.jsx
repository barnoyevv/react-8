import React from 'react'
import './index.css'
import routes from '@routes'
import index from '../../router'
import { NavLink, useLocation } from 'react-router-dom'
import Tesla from '../../assets/Tesla.svg'
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";


const Index = () => {
  const {pathname} = useLocation()
  return (
    <div className='header'>
      <div className="container">
        <div className="header_box">
          <div className="header_link">
      <img className='header_' src={Tesla} alt="" />
       <ul className='d-flex gap-4 link ' >
        {
          routes?.map((item, index) => (
            <li className='link_pages' key={index}>

              <NavLink   to={item.path} className={item.path === pathname ? "header_first" : "header_last"}>
                {item.content}
              </NavLink>
            </li>
          ))
        }
       </ul>
       </div>
       <div className="header_product">
        <div className="header_input">
        <IoSearch className='header_input_img'/>
          <input type="text " placeholder='Search'/>

        </div>
        <IoPersonOutline  className='header_product_img'/>
        <IoMdMenu className='header_product_img' />
 
       </div>


    </div>
    </div>
    </div>
  )
}

export default Index