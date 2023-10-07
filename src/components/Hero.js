import React, { useRef } from "react";


export default function Hero(props) {
    const inputRef = useRef();
    const { setPokemonName } = props;
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target;
        const formData = new FormData(form);
        setPokemonName(formData.get("pokemonName"));
        inputRef.current.value = "";

    }
    return (
        <div className="hero">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a Pokemon" name="pokemonName" ref={inputRef} />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}