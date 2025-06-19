
const API_URL = 'http://localhost:8080';

const API_ROUTES = {
    PRODUCTS: `${API_URL}/api/products`,
    SEND_EMAIL: (email) => `${API_URL}/api/send-email?email=${encodeURIComponent(email)}`,
    VALIDATE_EMAIL: `${API_URL}/api/validate-email`,
    START_TRIAL: `${API_URL}/api/start-trial`
}

export async function GetProducts() {

    const response = await fetch(API_ROUTES.PRODUCTS);
    const data = await response.json();
    return data;

}

export async function SendEmail(email) {

    const response = await fetch(API_ROUTES.SEND_EMAIL(email));
    const data = await response.json();
    return data;
}

