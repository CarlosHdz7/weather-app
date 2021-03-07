const axios = require("axios");

class Busquedas{
    historial = ["Tegucigalpa","Madrid","San José"];

    constructor(){
        //leer db si existe
    }

    get paramsMapbox(){
        return {
            'access_token':process.env.MAPBOX_KEY,
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

            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));

            
        }catch(error){
            return [];
        }
    }

    async climaLugar(lat,lon){
        try {
            //peticion http
            const instance = axios.create({
                baseURL: `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_KEY}`
            });

            
            const resp = await instance.get();

            return resp.data.features.map( clima => ({
                desc:'',
                min:'',
                max:'',
                temp:''
            }));

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Busquedas;