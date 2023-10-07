import axios from 'axios';

const getPokemon = async (nameOrId) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default getPokemon;