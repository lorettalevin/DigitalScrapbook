import axios from './axios';

export function addScrapbook(data) {
    console.log("running addScrapbook", data);
    return axios.post('/addscrapbook', data).then(resp => {
        const { scrapbook_title, theme, color } = resp.data;
        return {
            type: 'ADD_SCRAPBOOK_HANDLE_SUBMIT',
            scrapbook_title,
            theme,
            color
        };
    });
}
