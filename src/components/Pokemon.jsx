import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [names, setNames] = useState([])
    function handleClick(){
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1000")
        .then(response => setNames(response.data.results))
        .then(response => console.log(response))
    }    
        
    return (
        <div>
            <button className="btn btn-secondary" onClick={handleClick}>Fetch Pokemon</button>
            <ol>
            {
                names.map(name => {
                    return <Character name = {name.name} />
                })
            }
            </ol>
        </div>
    );
};

Pokemon.propTypes = {};

export default Pokemon;