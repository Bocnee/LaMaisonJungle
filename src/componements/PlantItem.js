
import CareScale from './CareScale';
import '../styles/PlantItem.css';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
};

function PlantItem({ cover, name, water, light, price }) {
	return (
		<li className='plant__item' onClick={() => handleClick}>
			<span className='plant__item__price'>{price}€</span>
			<img className='plant__item__cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	);
};

export default PlantItem;