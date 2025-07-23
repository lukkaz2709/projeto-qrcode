import chalk from "chalk";

const promptSchemaMain = [
    {
        name: 'select',
        description: chalk.green.bold( 'Escolha a ferramenta 1 - QRCODE OU 2 - PASSWORD'),
        pattern: /^[1-2]$/,
        message: chalk.red.italic('Selecione 1 ou 2'),
        required: true,
    }
]

export default promptSchemaMain;