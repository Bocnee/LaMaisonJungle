import '../styles/Cart.css';
import { useState, useEffect } from 'react';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true);
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	);
	useEffect(() => {
		document.title = `La maison Jungle | ${total}€`
	}, [total])
	return isOpen ? (
		<div className='cart'>
			<button
				className='cart__toggleButton'
				onClick={() => setIsOpen(false)}
			>Fermer</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								<p className='cart__flex__group'>
									<p className='cart__title'><span className='cart__title__name'>{name}</span> : {price}€</p>
									<p className='cart__total cart__flex'>
										<p className='cart__amount'>× {amount}</p>
										<p>{price * amount}€</p>
									</p>
								</p>
							</div>
						))}
					<h3>Total : {total}€</h3>
					<button className="empty__button" onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='cart__closed'>
			<button
				className='cart__toggleButton'
				onClick={() => setIsOpen(true)}
			>Ouvrir le Panier</button>
		</div>
	);
};

export default Cart;