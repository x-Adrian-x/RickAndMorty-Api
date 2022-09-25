const laUrl = 'https://rickandmortyapi.com/api/character'

const getAllCharacters = async (url)=>{
    try {
        const res = await axios(url) // el metodo por defecto de axios es el GET, por lo cual no hace falta especificar axios.get, solo basta con hacer la peticion a la url, aunque axios.get tambien estaria bien y de hecho seria mas claro.
        const data = res.data
        return data;
    } catch (error) {
        console.log(error);
    }
}

export{
    getAllCharacters,
    laUrl
}