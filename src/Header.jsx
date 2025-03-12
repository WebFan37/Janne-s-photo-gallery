
import './Header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header({ cart, setFilter, filter, triage, setTriage }) {
  return (
    <header>
      <h1>Janne's Photo Gallery</h1>

      <div className="cart">
        <ShoppingCartIcon />
        <span className='cart-quantity'>
          {Object.values(cart).reduce((acc, item) => acc + item.TheQuantity, 0)}
        </span>
        <span>
          <p>Price: ${Object.values(cart).reduce((acc, item) => acc + item.TheQuantity * item.ThePrice, 0).toFixed(2)}</p>
        </span>
      </div>

      {/* Filter Dropdown */}
      <select name="filter" onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">All Photos</option>
        <option value="nature">Nature</option>
        <option value="travel">Travel</option>
        <option value="universe">Universe</option>
        <option value="object">Object</option>
      </select>

      {/* Sorting Dropdown */}
      <select name="triage" value={triage} onChange={(e) => setTriage(e.target.value)}>
        <option value="None">Sort by</option>
        <option value="priceAsc">Price / Low to High</option>
        <option value="priceDesc">Price / High to Low</option>
        <option value="nameAsc">Name / A-Z</option>
        <option value="nameDesc">Name / Z-A</option>
      </select>
    </header>
  );
}

export default Header;
