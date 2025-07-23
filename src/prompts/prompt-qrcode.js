
import chalk from 'chalk';


const promptQrcode = [
    {
        name: 'link',
        description: chalk.blue('Digite o link que deseja transformar em QRCode'),
    },
    {
        name: 'type',
        description: chalk.blue('Escolha entre o tipo de QRCode: 1- NORMAL 2- TERMINAL '),
        pattern : /^[1-2]+$/,
        message: chalk.red('Opção inválida, escolha 1 ou 2'),
        required: true,
    }
];

export default promptQrcode;