const { leerInput } = require("./helpers/inquirer")

require("colors")

const main = async() => {
    const text = await leerInput("Hola: ");
    console.log(text);
}

main();