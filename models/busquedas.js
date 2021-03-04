const axios = require("axios");

class Busquedas{
    historial = ["Tegucigalpa","Madrid","San José"];

    constructor(){
        //leer db si existe
    }

    async ciudad( lugar = "" ){
        try{
            //peticion http
            //console.log("Ciudad",lugar);
            const respuesta = await axios.get("https://reqres.in/api/users?page=2");
            console.log(respuesta.data);
            return []; //retornar las ciudades o lugares 
            
        }catch(error){
            return [];
        }
    }
}

module.exports = Busquedas;