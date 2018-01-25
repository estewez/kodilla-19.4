function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [
                    {
                        id: action.id,
                        text: action.text,
                        votes: 0
                    }, 
                    ...state
                ];
        case REMOVE_COMMENT:
            return  state.comments.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return [
                    {
                        id: action.id,
                        text: action.text,
                        votes: state.comments.filter(comment => comments.id === action.id).votes
                    },
                    ...state.comments.filter(comment => comment.id !== action.id)
                ];
        case THUMB_UP_COMMENT:
            return [
                    {
                        id: action.id,
                        text: state.comments.filter(comment => comments.id === action.id).text,
                        votes: state.comments.filter(comment => comments.id === action.id).votes + 1
                    },
                    ...state.comments.filter(comment => comment.id !== action.id)
                ];
        case THUMB_DOWN_COMMENT:
            return [
                    {
                        id: action.id,
                        text: state.comments.filter(comment => comments.id === action.id).text,
                        votes: state.comments.filter(comment => comments.id === action.id).votes - 1
                    },
                    ...state.comments.filter(comment => comment.id !== action.id)
                ];
        default:
            return state;
    } 
}