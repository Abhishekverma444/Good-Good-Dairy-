import React, {useState} from 'react';



const Search = ({onSearchChange, handleClick}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }


    return (
        <>
            <div className='h-2/5 bg-red-400 flex items-center pl-24 py-2 shadow-inner shadow-red-600 '>
                <div className='h-full rounded-md m-2 shadow-inner shadow-red-500 '>
                    <input
                        className='w-72 h-full px-4 rounded-l-md outline-red-500 text-red-500 font-semibold shadow-inner shadow-slate-300'
                        type='text' placeholder='Search here....'
                        value={searchInput}
                        onChange={handleInputChange}
                    />
                    <button
                        className='rounded-r-md px-4 py-2 text-white font-semibold shadow-sm shadow-red-600  hover:shadow-lg  hover:shadow-red-700'
                        onClick={ () => handleClick(searchInput) }
                    >Search</button>
                </div>
            </div>
        </>
    )
}

export default Search;