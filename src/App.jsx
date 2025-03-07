import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import list from './data/lists.json'

import Myitem from './Item.jsx'
import MyHeader from './Header.jsx'



import ItemList from './ItemList.jsx';

function App() {
  const [cart, setCart] = useState(() => JSON.parse(window.localStorage.getItem("cart")) || {});
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filteredList = list.filter(({ category }) => filter === "all" || category === filter);

  return (
    <main>
      <MyHeader cart={cart} setFilter={setFilter} filter={filter} />
      <ItemList list={filteredList} cart={cart} setCart={setCart} /> {/* Pass filtered list */}
    </main>
  );
}

export default App
