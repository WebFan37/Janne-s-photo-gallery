import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import list from './data/lists.json'

import Myitem from './Item.jsx'
import MyHeader from './Header.jsx'
import ItemList from './ItemList.jsx';
import Footer from './Footer.jsx'

function App() {
  const [cart, setCart] = useState(() => JSON.parse(window.localStorage.getItem("cart")) || {});
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //filter the list based on the selected category
  const filteredList = list.filter(
    //Select the default category or
    ({ category }) => filter === "all" || 

    //if the category is an array, 
    // check if the filter is included in the array
     (Array.isArray(category) && category.includes(filter))
    
    );

  return (
    <main>
      <MyHeader cart={cart} setFilter={setFilter} filter={filter} />
      <ItemList list={filteredList} cart={cart} setCart={setCart} /> {/* Pass filtered list */}
      <Footer/>
    </main>
  );
}

export default App
