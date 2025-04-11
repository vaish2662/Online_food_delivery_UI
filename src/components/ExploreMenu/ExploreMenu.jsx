/* eslint-disable no-unused-vars */
import React from 'react'
import './exploremenu.css'
import { menu_lists } from '../../assets/image/Assets'
function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our Menu</h1>

        <p className='explore-menu-text'>Choose from a diverse menu feat</p>
        <div className='explore-menu-list'>
            {
                menu_lists.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
