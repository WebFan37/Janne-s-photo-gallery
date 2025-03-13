

import { useEffect, useState } from 'react';
import './App.css';
import MyHeader from './Header.jsx';
import ItemList from './ItemList.jsx';
import Footer from './Footer.jsx';
import list from './data/lists.json';

function App() {
  const [cart, setCart] = useState(() => JSON.parse(window.localStorage.getItem("cart")) || {});
  const [filter, setFilter] = useState("all");
  const [triage, setTriage] = useState("None");
  // const [commentMemory, setCommentMemory] = useState(() => JSON.parse(window.localStorage.getItem("comment")) || {})


  // //USE EFFECT FOR STORING THE COMMENT
  // useEffect(() => {window.localStorage.setItem("comment", JSON.stringify(commentMemory)); }, [commentMemory])

  //USE EFFECT FOR CART SECTION
  useEffect(() => {window.localStorage.setItem("cart", JSON.stringify(cart));}, [cart]);

  
  // Filter and sort the list
  const filteredTriageList = [...list]
    .filter(({ category }) =>
      filter === "all" ||
      (Array.isArray(category) && category.includes(filter)) ||
      category === filter
    )
    .sort(comparison[triage] || (() => 0)); // Default: no sorting



  return (
    <main>
      <MyHeader 
      cart={cart} 
      setFilter={setFilter}
      filter={filter} 
      triage={triage} 
      setTriage={setTriage}
      />
      <ItemList 
      list={filteredTriageList} 
      cart={cart} 
      setCart={setCart}
      />
      <Footer />
    </main>
  );
}

export default App;

// Sorting functions
const comparison = {
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  nameAsc: (a, b) => a.name.localeCompare(b.name, "en"),
  nameDesc: (a, b) => b.name.localeCompare(a.name, "en"),
  dateDesc: (a, b) => new Date(a.dateTaken) - new Date(b.dateTaken),
  dateAsc: (a, b) => new Date (b.dateTaken) - new Date (a.dateTaken)
};
