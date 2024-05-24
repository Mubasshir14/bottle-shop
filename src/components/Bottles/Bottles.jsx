import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoreCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";



const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load card to local storage
    useEffect(() =>{
        if (bottles.length > 0){
            const storedCart = getStoreCart();
            console.log(storedCart)

            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log(savedCart)
            setCart(savedCart);
        }
    },[bottles])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from ls
        removeFromLS(id);
    }

    return (
        <div>
            <h4>Bottles Available: {bottles.length}</h4>
            {/* <h4>Cart: {cart.length}</h4> */}
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;