import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Pays = () => {

    const [data,setData] = useState([])
    const [rangeValue, setRangeValue]= useState(36)
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"]
    const [selectedRadio, setSelectedRadio] = useState("")
    useEffect(() => {
        axios.get('https://restcountries.com/v3/all').then((res) => setData(res.data))
    },[])
    return (
        <div className='countries'>
            <ul className="radio-container">
                <input 
                type="range" 
                name="" 
                min="3" max="250" 
                id="" 
                defaultValue={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
                />
                {
                    radios.map((continent) => (
                        <li>
                            <input 
                            type='radio' 
                            id={continent}
                            name='continentRadio'
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)}
                            />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </ul>
            {
                selectedRadio && (
                    <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>
                )
            }
            <ul>
                {data
                    .filter((pays) => pays.continents[0].includes(selectedRadio))
                    .sort((a,b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((pays, index) => (
                            <Card key={index} pays={pays} />
                ))}
            </ul>
        </div>
    );
};
export default Pays;