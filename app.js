const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")

require("colors")

const main = async() => {
    let opt;

    do{
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                console.log("Opcion 1")
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