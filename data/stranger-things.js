import axios from "axios";
const StrangerThings = async () =>{
    const URL_ST = 'https://stranger-things-api.fly.dev/api/v1/characters';
    try{
        const resposta = await axios.get(URL_ST);
        return resposta.data
    }
    catch (error){
        throw error;

    }
}
export default  StrangerThings