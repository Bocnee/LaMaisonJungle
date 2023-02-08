import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import logo from "../assets/logo.png";
import '../styles/Layout.css';
import { useState, useEffect } from 'react';

function App() {
    const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
    return (
        <div>
            <Banner>
                <img src={logo} alt="Logo représentant une feuille, la maison de la jungle" className="banner__logo" />
                <h1 className="banner__title">La maison Jungle</h1>
            </Banner>
            <div className="layoutInner">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App;