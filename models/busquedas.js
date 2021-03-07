const axios = require("axios");

class Busquedas{
    historial = ["Tegucigalpa","Madrid","San José"];

    constructor(){
        //leer db si existe
    }

    get paramsMapbox(){
        return {
            'access_token':'pk.eyJ1IjoiY2FybG9zaGR6NyIsImEiOiJja2x5azdkbWMxaGhnMnZuNnhscGEwanVnIn0.bl6hB33FveCr6wYCGgDYcg',
            'limit':5,
            'language':'es'
        }
    }

    async ciudad( lugar = "" ){
        try{
            //peticion http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:this.paramsMapbox
            });

            const resp = await instance.get();
            console.log(resp.data);
            return []; //retornar las ciudades o lugares 
            
        }catch(error){
            return [];
        }
    }
}

module.exports = Busquedas;