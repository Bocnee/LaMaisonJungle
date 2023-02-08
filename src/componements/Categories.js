import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory}) {
    return (
        <div className='categories'>
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='categories__select'
            >
                <option value=''>🌿🌱🌵</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button className='reset__button' onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    );
};

export default Categories;