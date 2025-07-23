import qrcode from 'qrcode-terminal';


function isValidUrl(url) {
    return /^https?:\/\/.+\..+/.test(url);
}

function handle(err, result) {
    if (err) {
        console.error('Erro:', err);
        return;
    }
    if (!result.url || result.url.length === 0) {
        console.error('Link recebido: undefined');
        return;
    }
    if (!isValidUrl(result.url)) {
        console.error('URL inválida! Informe um link começando com http:// ou https://');
        return;
    }
    qrcode.generate(result.url, { small: true });
}

export default handle;