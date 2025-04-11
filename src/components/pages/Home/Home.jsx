import React from 'react'
import { useState } from 'react'
import './home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
// import Footer from '../../Footer/Footer'

function Home() {
  const [category,setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      {/* <Footer className='footer'/> */}
    </div>
  )
}

export default Home
