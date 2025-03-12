
import './ItemList.css';
import EachItem from './Item.jsx';

function ItemList({ list, cart, setCart }) {
  return (
    <section className="grocery-list">
      <p>
        Welcome to my photo gallery. Here you can find a collection of photos
        that I have taken over the years. I handpicked these top photos from
        my collection. I hope you enjoy viewing them as much as I enjoyed taking them.
      </p>

      {list.map(({ id, name, price, description, image, alt }) => (
        <EachItem
          key={id}
          id={id}
          name={name}
          price={price}
          description={description}
          image={image}
          alt={alt}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </section>
  );
}

export default ItemList;
