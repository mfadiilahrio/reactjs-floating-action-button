import { config } from '../config';
import { getTotp } from './totp';

export const getSetting = async (shop) => {
    const totp = await getTotp(shop);

    const response = await fetch(`${config.API_URL}/tadaSetting?shop=${shop}`, {
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        'Authorization': totp.token
        },
    });

    return response;
}