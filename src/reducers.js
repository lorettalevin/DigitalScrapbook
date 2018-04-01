const INITIAL_STATE = {
    scrapbook: {}
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

    return state;
}
