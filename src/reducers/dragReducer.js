const dragReducer = (state, action) => {
    switch (action.type) {
        case "changeDragList":
            state = {
                ...state,
                draggingListId: action.payload
            };
            break;
        case "changeDropList":
            state = {
                ...state,
                droppingListId: action.payload
            };
            break;
        case "changeDragCard":
            state = {
                ...state,
                draggingCardId: action.payload
            };
            break;
        case "changeDropCard":
            state = {
                ...state,
                droppingCardId: action.payload
            };
            break;
        case "checkDrop":
            state = {
                ...state
            };
            var temp = state.boards[state.selectedBoardId].category[state.draggingListId];
            state.boards[state.selectedBoardId].category[state.draggingListId] = state.boards[state.selectedBoardId].category[state.droppingListId];
            state.boards[state.selectedBoardId].category[state.droppingListId] = temp;
            break;
        case "checkDropCard":
            state = {
                ...state
            };
            var t;
            t = state.boards[state.selectedBoardId].category[state.draggingListId].cards[state.draggingCardId];
            delete state.boards[state.selectedBoardId].category[state.draggingListId].cards[state.draggingCardId];
            if (state.draggingCardId < state.droppingCardId) {
                state.boards[state.selectedBoardId].category[state.droppingListId].cards.splice(state.droppingCardId + 1, 0, t);
            }
            else {
                state.boards[state.selectedBoardId].category[state.droppingListId].cards.splice(state.droppingCardId, 0, t);
            }
            state.boards[state.selectedBoardId].category[state.draggingListId].cards = state.boards[state.selectedBoardId].category[state.draggingListId].cards.filter(function (n) { return n != undefined });
            break;
        default:
            state = { ...state }
            break;
    }
    return state;
}
export default dragReducer;