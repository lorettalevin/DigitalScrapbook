const INITIAL_STATE = {
    scrapbook: {},
    scrapbooks: [],
    pages: [],
    images: []
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
        state = Object.assign({}, state, {scrapbooks: action.scrapbooks});
    }

    if (action.type === 'GET_SCRAPBOOK') {
        state = Object.assign({}, state, {scrapbook: action.scrapbook});
    }

    if (action.type === 'EDIT_SCRAPBOOK') {
        state = Object.assign({}, state, {scrapbook: action.newData});
    }

    if (action.type === 'ADD_PAGE') {
        const pages = state.pages.slice()
        pages.push(action.page)

        state = Object.assign({}, state, {
            pages

        });
        console.log("ADDED page to the STATE", state);
    }

    if (action.type === 'GET_PAGES') {
        state = Object.assign({}, state, {pages: action.pages});
    }

    if (action.type === 'ADD_IMAGES') {
        const images = state.images.slice()
        images.push(action.image)

        state = Object.assign({}, state, {
            images
        });
    }

    if (action.type === 'GET_IMAGES') {
        state = Object.assign({}, state, {images: action.images});
    }

    if (action.type === 'GET_FULL_SCRAPBOOK') {
        state = Object.assign({}, state, {scrapbookInfo: action.scrapbookInfo});
    }

    if (action.type === 'CHANGE_COLOR') {
        state = Object.assign({}, state, {selectedColor: action.selectedColor});
    }
    if (action.type === 'EDIT_TITLE') {
        return Object.assign({}, state, {scrapbook: Object.assign({}, state.scrapbook, {scrapbook_title: action.newTitle})})
    }
    return state;
}
