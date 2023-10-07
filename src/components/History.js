
import React from 'react';
import { onSnapshot } from 'firebase/firestore';
import { pokemonCollection } from './firebase';


export default function History() {

    const [pokemonStored, setPokemonStored] = React.useState([])

    React.useEffect(() => {
        const unsubscribe = onSnapshot(pokemonCollection, function (snapshot) {
            // Sync up our local notes array with the snapshot data
            const pokemonArr = snapshot.docs.map(doc => (
                <img src={doc.data().image} alt="pokemon" />
            ))
            setPokemonStored(pokemonArr)
        })
        return unsubscribe
    }, [])




    return (
        <div>
            <h2>yours pokemons searched</h2>
            <h1>{pokemonStored}</h1>
        </div>
    )
}