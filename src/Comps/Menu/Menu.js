import React from 'react';

import './Menu.css'

const Menu = (props) => {

  const { menus } = props;

  return (

    <>
      {
        menus.map((menu, i) => {
          return (
            <div className='menu-container' key={i}>
              <div className='menu-img-container'>
                <img src={menu.img} alt="" />
              </div>
              <div className='menu-info-container'>
                <div className='menu-title-price-container'>
                  <h3>{menu.title}</h3>
                  <span>{menu.price}</span>
                </div>
                <p>
                  {menu.desc}
                </p>
              </div>
            </div>
          )

        })
      }
    </>




  );
};

export default Menu;
