import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();


    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    } ,[products])
    const handleAddToCart = (product) =>{
        let newCart  = [];
        const exists = cart.find(selectedProduct => selectedProduct.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(selectedProduct => selectedProduct.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [ ...rest, exists]
        }
        console.log(product  );
        // const newCart = [...cart , product];
        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product ={product}
                        handleAddToCart={handleAddToCart}
                     ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                    <Link to ='/orders'>
                        <button>Review Orders</button>
                    </Link>
                </Cart>
                
            </div>
        </div>
    );
};

export default Shop;