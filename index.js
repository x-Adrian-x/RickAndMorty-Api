import { getAllCharacters, laUrl } from "./getCharacters.js";
import listInfo from "./listCharacters.js";

const listAvatars = async()=>{
    try {
        let data = await getAllCharacters(laUrl)
        data.results.map(item =>{
            //console.log(item.name)
            listInfo(item.name, item.species, item.gender, item.image, item.status)
        })
    } catch (error) {
        console.log(error);
    }
}

listAvatars()