import React from 'react';

export default function RadioGroupFunc({ options, selectedOption, onChange }) {

    return (
        <div className='divLabel'>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={onChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    );
}