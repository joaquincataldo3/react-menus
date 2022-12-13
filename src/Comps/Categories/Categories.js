import React from 'react';

import './Categories.css'

const Categories = (props) => {

  const { categories, handleCategoryBtnClick } = props;

  return (
    <> 
    {
      categories.map((category, i) => {
        return <button className='category-btn' key={i} onClick={() => {handleCategoryBtnClick(category)}}>{category}</button>
      })
    }

    </>
  );
};

export default Categories;
