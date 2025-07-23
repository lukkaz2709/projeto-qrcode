import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(chalk.green("Criando sua senha, espere um momento!"));
    const password = await handle();
    console.log(chalk.yellow(`Sua senha aleatória: ${password}`)); // Adicionado para exibir a senha
}

export default createPassword;