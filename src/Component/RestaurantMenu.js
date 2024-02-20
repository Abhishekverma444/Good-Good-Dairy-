import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { restaurantList, IMG_CDN_URL } from '../utils/constants';
import { MenuContext } from '../utils/MenuContext'



const RestaurantMenu = () => {

  const { addToCart } = useContext(MenuContext);

  const handleAddToCart = (menuItem) => {
    addToCart(menuItem);
  };

  let { restaurantId } = useParams();
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = restaurantList.filter(restaurant => restaurant?.data?.id === restaurantId);
    if (data.length > 0) {
      setResData(data);
      setLoading(false);
    }
  }, [restaurantId]);

  if (loading) {
    return <div>Loading....</div>;
  }

  // console.log(resData[0].data);

  return (
    <>

      <div className='w-1/2 h-full shadow-inner shadow-red-600  m-3 '>
        <div className='flex flex-col m-4'>
          <img className='rounded-xl' src={IMG_CDN_URL + resData[0]?.data?.cloudinaryImageId} />
          <div className='font-bold text-3xl shadow-inner bg-rose-500 shadow-red-600 p-4 text-white mt-4'>{resData[0].data.name}</div>
        </div>
      </div>


      <div className='w-2/5 shadow-inner shadow-red-600  m-3 p-3' >
        <h1 className='text-center text-white underline  p-2 font-semibold text-2xl'>Restaurant's Menu Item</h1>
        <div className='overflow-y-auto max-h-96 '>
          <ul>
            {restaurantList.map((item, idx) => (
              <div key={idx} className='flex justify-between shadow-sm shadow-rose-500'>
                <li className='m-2 text-white font-semibold'>{item?.data?.name}</li>
                <button
                  className='m-1 px-3 font-semibold text-white  shadow-inner shadow-emerald-950 rounded-md bg-green-700 hover:shadow-none hover:bg-green-600'
                  onClick={() => handleAddToCart(item?.data)}
                >Add
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>

    </>
  )
}

export default RestaurantMenu;
