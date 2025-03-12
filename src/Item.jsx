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
    const [imageOuvert, setImageOuvert] = useState(false);
    const [imageSource, setImageSource] = useState('');
    

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
        // console.log(ouvert);
        
    }


//PREVENT SCREENSHOT//
//====== DESKTOP PC =====//

window.addEventListener("keydown",(event) => {

    if(event.key === "PrintScreen"){
        alert("Capture d'écran n'est pas autorisé")
        event.preventDefault();
    }

} )

function ouvrirImage() {
    const imageSrc = "./gallery/" + image + ".jpg"; 
    setImageSource(imageSrc);
    setImageOuvert(true);
}

function fermerImage() {
    setImageOuvert(false);
    setImageSource('');
}

// function openImageFullScreen() {
//     if (imageSource) {
//         const newTab = window.open();
//         newTab.document.write(`
//             <html>
//                 <head>
//                     <title>Full Screen Image</title>
//                     <style>
//                         body {
//                             margin: 0;
//                             display: flex;
//                             justify-content: center;
//                             align-items: center;
//                             height: 100vh;
//                             background: black;
//                         }
//                         img {
//                             max-width: 100%;
//                             max-height: 100%;
//                             object-fit: contain;
//                         }
//                     </style>
//                 </head>
//                 <body>
//                     <img src="${imageSource}" alt="Full screen image" />
//                 </body>
//             </html>
//         `);
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
            <img src={"./gallery/" + image + ".jpg"} alt={alt} 
           draggable ={false} onClick = {ouvrirImage}/>

           {/* OPEN IMAGE */}
           {/* {imageOuvert && (
            <div >
                <div style={modalStyles}>
                    <div style={overlayStyles} onClick={openImageFullScreen}></div>
                    <div style={modalContentStyles}>
                        <img src={imageSource} alt="Full screen" style={imageStyles} />
                    </div>
                </div>

            </div>
           )} */}

           
           


            <p>
                QUANTITY: {count}

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
               
                <button onClick={() => {
                    alert("Section stanby for development")
                }}> Buy</button>
            </div>
        </section>
    );
    


}

    // Inline styles for the modal
    const modalStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      };
      
      const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
        backdropFilter: 'blur(5px)',  // Blurry background effect
      };
      
      const modalContentStyles = {
        position: 'relative',
        zIndex: 2,
      };
      
      const imageStyles = {
        maxWidth: '90vw',   // 90% of the browser's width
        maxHeight: '90vh',  // 90% of the browser's height
        objectFit: 'contain', // Preserve the aspect ratio while scaling
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', // Optional: Add shadow to make the image pop
      };


export default Item