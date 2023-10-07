import React, { useState, useEffect } from 'react';
import getPokemon from './APIconsumer';
import { db } from './firebase';
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
});

const Pokemon = ({ nameOrId }) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPokemon(nameOrId);
            setPokemonData(data);
        };
        fetchData();
    }, [nameOrId]);


    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    setDoc(doc(db, "pokemon", pokemonData.name), {
        name: pokemonData.name,
        height: pokemonData.height,
        weight: pokemonData.weight,
        image: pokemonData.sprites.front_default
    });







    return (
        <div>
            <h1>{pokemonData.name}</h1>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
        </div>
    );
};

export default Pokemon;