import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';

function SearchBar(props) {

    const [trackSearch, setTrackSearch] = useState('');


return (
    <div className='SearchFormContainer'>
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