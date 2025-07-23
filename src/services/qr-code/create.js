import prompt from 'prompt';
import promptSchemaQrcode from '../../prompts-schema/prompt-schema-qrcode.js';
import handle from './handle.js';

async function createQRCode() {
    prompt.start();
    prompt.get(promptSchemaQrcode, handle);
}

export default createQRCode;