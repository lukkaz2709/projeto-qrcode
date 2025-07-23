import prompt from 'prompt';
import promptQrcode from '../../prompts/prompt-qrcode.js';
import handle from './handle.js';

async function createQRCode() {
    prompt.start();
    prompt.get(promptQrcode, handle);
}

export default createQRCode;