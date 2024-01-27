import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const RestaurantCard = ({ restaurant }) => {

    return (
        <div className='w-64 h-full p-2 shadow-red-600 shadow-inner  hover:p-1'>
            <img
                className='w-full rounded-2xl'
                src={IMG_CDN_URL + restaurant.cloudinaryImageId}
                alt='restaurantCard'
            />

            <div className='mx-3 mt-1'>
                <h1 className='font-semibold text-xl text-gray-800'>{restaurant?.name}</h1>
                <h2 className='font-bold text-sm text-gray-800'>{restaurant.costForTwoString}</h2>
                <p className='text text-gray-700'>{restaurant.cuisines.map((cuisine, index) => (
                        <span key={index}>{cuisine}, </span> 
                    ))}</p>
                
                <p className='font-semibold text-xl text-gray-800'>⭐{restaurant.avgRating}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;
