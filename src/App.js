import React, { useState, useEffect } from 'react';
import Menu from './Comps/Menu/Menu';
import Categories from './Comps/Categories/Categories';
import items from './data';

import './App.css'

// dynamic approach to get unique values in an array 
// first we get the items category, we use the set method with the destructuring and then we add the all category
const uniqueCategories = ['All', ...new Set(items.map(item => item.category))]



function App() {

  const [menus, setMenus] = useState(items);
  const [categories, setCategories] = useState(uniqueCategories);

  const handleCategoryBtnClick = (category) => {
    console.log(category)
    if (category === 'All') {
      return setMenus(items)
    }  
    const filteredMenus = items.filter(menu => menu.category === category);
    console.log(filteredMenus)
    return setMenus(filteredMenus)
  }


  return (

    <section className='menus-section'>

      <h2>Our Menu</h2>
      <div className='underline'></div>

      <div className='btn-container'>

        <Categories categories={categories} handleCategoryBtnClick={handleCategoryBtnClick} />

      </div>

      <div className='menus-wrapper'>
        <Menu menus={menus} />
      </div>

    </section>

  );
}

export default App;
