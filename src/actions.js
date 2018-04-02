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
        return {
            type: 'GET_SCRAPBOOK',
            scrapbook: resp.data.scrapbook
        };
    });
}

export function editScrapbook(scrapbook_id, newData) {
    return axios.post(`/editonescrapbook/${scrapbook_id}`, newData).then(() => {
        return {
            type: 'EDIT_SCRAPBOOK',
            newData
        };
    });
}

export function addPage(scrapbook_id, header) {
    return axios.post(`/addpage/${scrapbook_id}`, {header}).then(() => {
        return {
            type: 'ADD_PAGE',
            header
        };
    });
}

export function getPages(scrapbook_id) {
    return axios.get(`/getpages/${scrapbook_id}`).then(resp => {
        return {
            type: "GET_PAGES",
            pages: resp.data.pages
        };
    });
}

export function addImages(page_id, formData) {
    return axios.post(`/addimages/${page_id}`, formData).then(resp => {
        const { description, file, image_title, page_id } = resp.data;
        return {
            type: "ADD_IMAGES",
            description,
            file,
            image_title,
            page_id
        };
    });
}


export function getImages(page_id) {
    return axios.get(`/getimages/${page_id}`).then(resp => {
console.log("RESPOTATO", resp);
const { file, description, image_title } = resp.data
        return {
            type: "GET_IMAGES",
            file,
            description,
            image_title

        };
    });
}
