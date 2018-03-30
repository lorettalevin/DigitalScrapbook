import axios from './axios';

export function addScrapbook() {
    return axios.post('/addscrapbook').then(resp => {
        return {
            type: 'ADD_SCRAPBOOK',
            scrapbook: resp.data.scrapbook
        };
    });
}
