import React, { useEffect, useState } from 'react';
import Restaurants from './Restaurants';
import { restaurantList } from '../utils/constants';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import InstaMart from './InstaMart';
import Cart from './Cart';
import RestaurantMenu from './RestaurantMenu';

const Body = ({ searchValue }) => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        // Filter the restaurant list based on searchValue
        const filteredRestaurants = restaurantList.filter(restaurant =>
            restaurant?.data?.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        // Update the restaurants state with filtered data
        setRestaurants(filteredRestaurants);
    }, [searchValue]);

    return (
        <div className='pt-36 flex flex-wrap bg-red-400 '>
            <Routes>
                <Route exact path="/" element={
                    restaurants.map((restaurant, index) => (
                        <Restaurants key={index} restaurant={restaurant.data} />
                    ))
                } />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/instamart" element={<InstaMart />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/restaurantmenu/:restaurantId" element={<RestaurantMenu />} />
            </Routes>
        </div>
    );
    
};

// {restaurants.map((restaurant, index) => (
//     <Restaurants key={index} restaurant={restaurant.data} />
// ))}
export default Body;














