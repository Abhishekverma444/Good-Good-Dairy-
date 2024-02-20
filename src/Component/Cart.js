import React, { useContext } from 'react';
import { MenuContext } from '../utils/MenuContext';
import { IMG_CDN_URL } from '../utils/constants';

const Cart = () => {
  const { cartItems, removeItem } = useContext(MenuContext);
  // const { removeItem } = useContext(MenuContext);
  const { clearCart } = useContext(MenuContext);
  
  console.log(cartItems);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  }

 

  return (
    <div className='flex flex-wrap justify-center items-end pb-5'>
      <div className='px-72  flex flex-wrap min-h-96 text-start  justify-end '>
        {Object.keys(cartItems).map(itemId => {
          const item = cartItems[itemId];
          return (
            <div key={itemId} className='m-2 p-4  shadow-inner shadow-red-500  max-h-40 min-h-32  flex items-center border-b border-gray-200 py-2'>
              <img src={IMG_CDN_URL + item.cloudinaryImageId} alt={item.name} className='w-28 h-24 object-cover rounded mr-4' />
              <div>
                <h3 className='text-lg font-semibold'>{item.name}</h3>
                <p className='text-gray-500 max-w-96'>{item.address}</p>
              </div>
              <button
                className='m-1 p-2 px-3 font-semibold text-white  shadow-inner shadow-green-950 rounded-md bg-green-700 hover:shadow-lg hover:shadow-green-900 '
                onClick={() => handleRemoveItem(itemId)}
              >
                Remove
              </button>

            </div>
          );
        })}


      </div>

      <button
        className=' m-1 p-2 h-11 w-24 px-3 font-semibold text-white  shadow-inner shadow-red-950 rounded-md bg-red-700 hover:shadow-lg hover:shadow-red-900'
        onClick={()=>clearCart()}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;



