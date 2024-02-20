import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({onSearchChange}) => {
  const handleClick = (value) => {
    // You can perform additional actions here before updating the search value
    onSearchChange(value);
  };

  return (
    <div className='h-36 bg-fixed fixed top-0 left-0 right-0'>
        <Navbar/>
        <Search onSearchChange={onSearchChange} handleClick={handleClick} />
    </div>
  )
}

export default Header

