import React from 'react';

const Card = ({pays}) => {
    return (
        <li className='card'>
            <img src={pays.flags[0]} alt={"Drapeau" + pays.translations.fra.common} />
            <div className='infos'>
                <h2>{pays.translations.fra.common}</h2>
                <h4>{pays.capital}</h4>
                <p>Pop. {pays.population}</p>
            </div>
        </li>
    );
};

export default Card;