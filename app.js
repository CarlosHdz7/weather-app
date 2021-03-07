require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listadoLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

require("colors")

const main = async() => {
    let opt;
    let busquedas = new Busquedas();

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //Mostrar mensaje
                const termino = await leerInput("Ciudad: ");
                
                //buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                console.log(lugares)

                //Seleccionar el lugar
                const id = await listadoLugares(lugares);
                const  lugarSeleccionado = lugares.find( lugar => lugar.id === id);

                console.log(lugarSeleccionado)

                //Datos del clima
                //Mostrar resultados
                console.log("\nInformacion de la ciudad\n");
                console.log("ciudad",lugarSeleccionado.nombre);
                console.log("Lat:",lugarSeleccionado.lat);
                console.log("Lng:",lugarSeleccionado.lng);
                console.log("Temperatura:",);
                console.log("Minima:",);
                console.log("Maxima:",);

                break;
            
            case 2:
                console.log("Opcion 1")
                break;
        
            default:
                break;
        }

        await pausa();

    }while( opt !== "0");

}

main();