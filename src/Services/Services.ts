import {HOST, TOKEN} from '@Utils/Constants';

async function GET(endPoint = '') {
    try {
        const response = await Response('GET', endPoint);

        return response;
    } catch (error: any) {
        console.error(`Download error: ${error.message}`);
    }
}

async function DELETE(endPoint = '') {
    try {
        const response = await Response('DELETE', endPoint);

        return response;
    } catch (error: any) {
        console.error(`Download error: ${error.message}`);
    }
}

async function PUT(endPoint = '', data = {}) {
    try {
        const response = await Response('PUT', endPoint, data);

        return response;
    } catch (error: any) {
        console.error(`Download error: ${error.message}`);
    }
}

async function POST(endPoint = '', data = {}) {
    try {
        const response = await Response('POST', endPoint, data);

        return response;
    } catch (error: any) {
        console.error(`Download error: ${error.message}`);
    }
}

async function Response(
    method = 'GET',
    endPoint = '',
    data = {},
    customHeads = {},
) {
    const response = await fetch(`${HOST}/${endPoint}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authentication: `Bearer ${localStorage.getItem(TOKEN)}`,
            ...customHeads,
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });

    return response.json();
}

export const Services = {
    POST,
    PUT,
    GET,
    DELETE,
};
