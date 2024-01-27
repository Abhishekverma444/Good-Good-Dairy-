import React from 'react'
import RestaurantCard from './RestaurantCard';


const Restaurants = ({ restaurant }) => {
    return (
        <div className=' px-5 py-3 '>
            {/* Pass the restaurant object to RestaurantCard */}
            <RestaurantCard restaurant={restaurant}/>
        </div>
    )
}

export default Restaurants