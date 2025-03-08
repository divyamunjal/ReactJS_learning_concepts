import React, { useEffect, useState } from 'react'

const SearchItems = () => {
    const items = ['Angular','ReactJS','NodeJS','Java','HTML','CSS'];
    const [searchedItem, setSearchedItem] = useState('');

    const filterItems = items.filter((item)=> item.toLowerCase().includes(searchedItem.toLowerCase()))
    
    

  return (
    <div className="container mt-5">
    <h1 className="text-primary">Search Items Example !</h1>

    <input type="text" placeholder='Search Item.....' onChange={(e) => setSearchedItem(e.target.value)}/>
      <ul>
        {
            filterItems.map((value,key) => {
                return <li key={key}>{value}</li>
            })
        }
      </ul>
    </div>
  )
}

export default SearchItems
