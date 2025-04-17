import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Page1.css';

function Page1() {
    const { addToCart } = useContext(CartContext);

    const products = [
        { name: 'Lipstick', price: 599, img: '/lipstick.jpeg' },
        { name: 'Foundation', price: 899, img: '/Foundation.jpeg' },
        { name: 'Eyeshadow', price: 1299, img: '/Eyeshadow.jpeg' },
        { name: 'Skincare Cream', price: 499, img: '/SkincareCream.jpeg' },
        { name: 'Perfume', price: 1599, img: '/Perfume.jpeg' },
        { name: 'Nail Polish', price: 299, img: '/NailPolish.jpeg' },
        { name: 'Mascara', price: 699, img: '/Mascara.jpeg' },
        { name: 'Blush', price: 599, img: '/Blush.jpeg' },
        { name: 'Concealer', price: 799, img: '/Concealer.jpeg' },
        { name: 'Highlighter', price: 899, img: '/Highlighter.jpeg' },
        { name: 'Eyeliner', price: 499, img: '/Eyeliner.jpeg' },
        { name: 'Moisturizer', price: 699, img: '/Moisturizer.jpeg' },
    ];

    return (
        <>
            <div id='main1'>
                <img id='img1' src='/logo-1.svg' alt='Logo' />
                <h2>From KosmoCare</h2>
                <div><img src='/img-2.jpg' alt='Main Visual' /></div>
            </div>    

            <div id='pagecontent'>
                {products.map((product, index) => (
                    <div key={index} className='pc1'> 
                        <img className='pi1' src={product.img} alt={product.name} />
                        <p><b>{product.name}</b></p>
                        <p><b>Price: ₹{product.price}</b></p>
                        <button onClick={() => addToCart(product)}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Page1;
