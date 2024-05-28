import React from 'react'
import Carousal from './Carousal'
import HomepageCard from './HomepageCard'
import CarousalCategory from './CarousalCategory'
import CarousalProduct from './CarousalProduct'
const Homepage = () => {
  return (
    <div className='bg-amazonclone-background'>
      <div className="min-w-[1000px] max-w-[1500px] m-auto  ">
        <Carousal />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomepageCard title={"We have a Surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"} />
          <HomepageCard title={"Watch the Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming Now"} />
          <HomepageCard title={"Unlimited"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more...."} />
          <HomepageCard title={"More titles to Explore"}
            img={"../images/home_grid_4.jpg"}
            link={"See terms and conditions"} />
          <HomepageCard title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See terms and conditions"} />
          <HomepageCard title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See terms and conditions"} />
          <HomepageCard title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See terms and conditions"} />
          <HomepageCard title={"Family plans: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"See terms and conditions"} />
          <div>
            <img className='xl:hidden' src={"../images/banner_image_2.jpg"} alt="" />
          </div>
        </div>
        <CarousalProduct />
        <CarousalCategory />
        <div className='h-[200px]'>
          <img className="h-[100%] m-auto" src={"../images/banner_image.jpg"} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Homepage