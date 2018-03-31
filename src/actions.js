import axios from './axios';

export function addScrapbook(data) {
    return axios.post('/addscrapbook', data).then(resp => {
        const { scrapbook_title, theme, color, user_id, scrapbook_id } = resp.data;
        return {
            type: 'ADD_SCRAPBOOK_HANDLE_SUBMIT',
            user_id,
            theme,
            color,
            scrapbook_title,
            scrapbook_id
        };
    });
}

export function getScrapbooks() {
    return axios.get('/getmyscrapbooks').then(resp => {
        return {
            type: 'GET_SCRAPBOOKS',
            scrapbooks: resp.data.scrapbooks
        };
    });
}

export function getScrapbook() {
    return axios.get('/getsinglescrapbook').then(resp => {
        console.log("pleaseee work", resp.data.scrapbooks);
        return {
            type: 'GET_SCRAPBOOK',
            scrapbooks: resp.data.scrapbooks

        };
    });
}
