import { useState } from 'react';

function ProductCard({ name, price, imageMap, options }) {
    const [selectedOption, setSelectedOption] = useState(options[0]); // Default selection

    return (
        <div className='pc1'> 
            <img className='pi1' src={imageMap[selectedOption]} alt={`${name} - ${selectedOption}`} />
            <p>{name}</p>
            <p><b>Price: ₹{price}</b></p>
            {options.length > 1 && (
                <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default ProductCard;
