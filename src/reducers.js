const INITIAL_STATE = {
    scrapbook: {},
    scrapbooks: [],
    pages: [],
    files: []
};

export default function reducer(state = INITIAL_STATE, action) {

    if (action.type === 'ADD_SCRAPBOOK_HANDLE_SUBMIT') {
        const {scrapbook_id, user_id, theme, color, scrapbook_title} = action;
        state = Object.assign({}, state, {
            scrapbook: {
                scrapbook_id,
                user_id,
                theme,
                color,
                scrapbook_title
            }
        });
    }

    if (action.type === 'GET_SCRAPBOOKS') {
        state = Object.assign({}, state, {
            scrapbooks: action.scrapbooks
        });
    }

    if (action.type === 'GET_SCRAPBOOK') {
        state = Object.assign({}, state, {
            scrapbook: action.scrapbook
        });
    }

    if (action.type === 'EDIT_SCRAPBOOK') {
        state = Object.assign({}, state, {
            scrapbook: action.newData
        });
    }

    if (action.type === 'ADD_PAGE') {
        state = Object.assign({}, state, {
            page: action.header
        });
    }

    if (action.type === 'GET_PAGES') {
        state = Object.assign({}, state, {
            pages: action.pages
        });
    }

    if (action.type === 'ADD_IMAGES') {
        const { description, file, image_title, page_id } = action;
        state = Object.assign({}, state, {
            files: {
                description,
                file,
                image_title,
                page_id
            }
        });
    }

    if (action.type === 'GET_IMAGES') {
        state = Object.assign({}, state, {
            images: action.images
        });
    }

    if (action.type === 'GET_FULL_SCRAPBOOK') {
        state = Object.assign({}, state, {
            scrapbookInfo: action.scrapbookInfo
        });
    }

    return state;
}
