import { config } from '../config';

export const getTotp = async (shop) => {
    
    const response = await fetch(`${config.API_URL}/totpGenerate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': shop
        }
    });

    if (response.status === 200) {
        const totp = await response.json()

        return {'token': totp.token};
    }

    return {'token': null};
}