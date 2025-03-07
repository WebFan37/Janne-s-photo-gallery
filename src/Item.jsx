import './Item.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Comment from './Comment.jsx'


function Item({id, name, price, description, image, alt, cart, setCart}) {

    
    const [aime, setAime] = useState(0);
    const [dislike, setDislike] = useState(0);
    const [inputNumber, setInputNumber] = useState('');  // Keep this for manual input
    const [count, setCount] = useState(0); // This is for counting quantity when using buttons
    const [ouvert, setOuvert] = useState(false)

    function compter() {
        setCount(count + 1);
    }

    function moins() {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert('You cannot have negative quantity');
        }
    }

    function aimer() {
        setAime(aime + 1);
        setDislike(dislike - 1);
    }

    function aimerPas() {
        setDislike(dislike + 1);
        setAime(aime - 1);
    }

    function ouvrirCommentaire(){
        setOuvert(true);
        console.log(ouvert);
        
    }

    // function handleInputChange(e) {

    //     // Ensure only numbers are allowed
    //     const value = e.target.value;
    //     if (!isNaN(value) && value >= 0) {
    //         setInputNumber(value); // Update manual input
    //     }
    // }

    function AddCart() {
        const quantityToAdd = inputNumber.trim() !== '' ? parseInt(inputNumber) : count;

        // If no valid quantity is provided, use the default count
        if (quantityToAdd > 0) {
            const NewCart = { ...cart };
            if (NewCart[id]) {
                NewCart[id].TheQuantity += quantityToAdd;
            } else {
                NewCart[id] = {
                    ThePrice: price,
                    TheQuantity: quantityToAdd,
                };
            }
            setCart(NewCart);
            // alert('Added to cart');
        } else {
            alert('Please enter a valid quantity');
        }
    }

    if (aime < 0) setAime(0);
    if (dislike < 0) setDislike(0);

    return (
        <section className="item">
            <div className='icons'>
                <span><ThumbUpOffAltIcon onClick={aimer} />{aime}</span>
                <span><ThumbDownOffAltIcon onClick={aimerPas}/>{dislike}</span>
            </div>

            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <img src={"./gallery/" + image + ".jpg"} alt={alt}/>


            <p>
                QUANTITY: {count}
                {/* <input 
                    type="text" 
                    placeholder={count} 
                    className='boutonQuant' 
                    value={inputNumber}
                    onChange={handleInputChange}
                /> */}

                <div className='quantity'>
                    <button onClick={compter}>+</button>
                    <button onClick={moins}>-</button>
                </div>
            </p>

            <div className='Add'>
                <button onClick={AddCart}> Add to cart</button>
                <div className='comment'>
                    Comment
                    <Fab aria-label="add" className='buttonComm' onClick={ouvrirCommentaire}>
                        <AddIcon />
                     </Fab>

                    {ouvert && <Comment ouvert={ouvert} setOuvert={setOuvert}/>}
                </div>
               
                <button> Buy</button>
            </div>
        </section>
    );
}


export default Item