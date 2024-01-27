import React from 'react';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({onSearchChange}) => {
  const handleClick = (value) => {
    // You can perform additional actions here before updating the search value
    onSearchChange(value);
  };

  return (
    <div className='h-36 bg-fixed'>
        <Navbar/>
        <Search onSearchChange={onSearchChange} handleClick={handleClick} />
    </div>
  )
}

export default Header

