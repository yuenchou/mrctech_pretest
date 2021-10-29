import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const SearchBar = ({setSearchTerm}) => {
    return (
        <form className="searchForm">
          <button className="searchIcon"><AiOutlineSearch/></button>
          <input 
            type="text" 
            placeholder="Search" 
            className="searchText"
            onChange={(e) => setSearchTerm(e.target.value)}
            />
          <button className="cancelIcon"><MdCancel/></button>
        </form>
    )
}

export default SearchBar
