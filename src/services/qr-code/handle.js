import qr from "qrcode-terminal";
import chalk from "chalk";

function handle(err, result) {
    if (err) {
        console.error(err);
        return;
    }

    // Exibe o link recebido
    console.log(chalk.green("Link recebido:"), result.link);

    // Gera o QR code no terminal
    qr.generate(result.link, { small: true });

    // Se quiser mostrar o tipo escolhido:
    console.log(chalk.yellow("Tipo escolhido:"), result.type);
}

export default handle;