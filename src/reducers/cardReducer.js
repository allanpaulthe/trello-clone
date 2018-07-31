const cardReducer = (state, action) => {
    switch (action.type) {
        case "newCard":
            state = {
                ...state
            };
            const card = {
                name: action.payload,
                description: "",
                comments: []
            }
            state.boards[state.selectedBoardId].category[state.selectedListId].cards.push(card);
            break;
        case "toggleCardExpand":
            state = {
                ...state,
                cardClick: !state.cardClick
            };
            break;
        case "changeDescription":
            state = {
                ...state,
            };
            state.boards[state.selectedBoardId].category[state.selectedListId].cards[state.selectedCardId].description = action.payload;
            break;
        case "addComment":
            state = {
                ...state,
            };
            const comment = {
                comment: action.payload,
                by: "owner",
                time: "time",
                date: "date"
            }
            state.boards[state.selectedBoardId].category[state.selectedListId].cards[state.selectedCardId].comments.push(comment);
            break;
        case "saveEdit":
            state = {
                ...state,
                editCard: !state.editCard,
            };
            state.boards[state.selectedBoardId].category[state.selectedListId].cards[state.selectedCardId].name = action.payload;
            break;
        default:
            state = { ...state }
            break;
    }
    return state;
}
export default cardReducer;