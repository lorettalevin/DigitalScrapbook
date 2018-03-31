const INITIAL_STATE = {
    scrapbook: {}
}
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
        })
    }

    return state
}
