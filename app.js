const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
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
                const lugar = await leerInput("Ciudad: ");
                await busquedas.ciudad(lugar);
                //buscar los lugares
                //Seleccionar el lugar
                //Datos del clima
                //Mostrar resultados
                console.log("\nInformacion de la ciudad\n");
                console.log("ciudad",);
                console.log("Lat:",);
                console.log("Lng:",);
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