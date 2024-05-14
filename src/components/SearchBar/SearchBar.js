import React from 'react'
import ReactDOM from 'react-dom/client';

function SearchBar() {

return (
    <div className='SearchFormDiv'>
    <form className='SearchForm'>
    <label>
    <p>Search</p>    
    <input className='SearchBarInput' type='text' name='SearchBarInput'>
    </input>
    
    </label>
    
    </form>
    </div>
)


};

export default SearchBar;