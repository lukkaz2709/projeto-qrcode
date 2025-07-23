import chalk from 'chalk';


const promptSchemaQrcode = [
    {
        name: 'url',
        description: chalk.blue('Digite a URL para gerar o QR Code'),
        type: 'string',
        required: true
    }
];

export default promptSchemaQrcode;