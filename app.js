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

                //Seleccionar el lugar
                const id = await listadoLugares(lugares);
                if(id === '0') continue;

                //Guardar en DB
                const  lugarSeleccionado = lugares.find( lugar => lugar.id === id);

                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                //Datos del clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat,lugarSeleccionado.lng);

                //Mostrar resultados
                console.clear();
                console.log("\nInformacion de la ciudad\n");
                console.log("ciudad",lugarSeleccionado.nombre.green);
                console.log("Lat:",lugarSeleccionado.lat);
                console.log("Lng:",lugarSeleccionado.lng);
                console.log("Temperatura:",clima.temp);
                console.log("Minima:",clima.min);
                console.log("Maxima:",clima.max);
                console.log("como esta el clima?:",clima.desc.green);

                break;
            
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar,i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${lugar}`)
                });
                break;
        
            default:
                break;
        }

        await pausa();

    }while( opt !== "0");

}

main();