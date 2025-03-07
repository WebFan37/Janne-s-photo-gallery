import { useState } from 'react';
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import list from './data/lists.json'


function Header({ cart, setFilter, filter }) {
    return (

      <header>
        <h1> Janne's photo gallery</h1>

        <div className="cart">
          <ShoppingCartIcon />

          <span className='cart-quantity'>
            {Object.values(cart).reduce((acc, item) => acc + item.TheQuantity, 0)}
          </span>

          <span>
            <p>Price: ${Object.values(cart).reduce((acc, item) => acc + item.TheQuantity * item.ThePrice, 0).toFixed(2)}</p>
          </span>
        </div>
        
  
        <select name="filtre" id="filtre" onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="all">All Photos</option>
          <option value="nature">Nature</option>
          <option value="travel">Travel</option>
          <option value="universe">Universe</option>
          <option value="object">Object</option>
        </select>
      </header>
    );
  }
  

export default Header