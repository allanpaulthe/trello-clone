const boardReducer = (state, action) => {
    switch (action.type) {
        case "setXandY":
            state = {
                ...state,
                editX: action.payload.x,
                editY: action.payload.y,
                editCard: !state.editCard
            };
            break;
        case "saveEdit":
            state = {
                ...state,
                editCard: !state.editCard,
            };
            state.boards[state.selectedBoardId].category[state.selectedListId].cards[state.selectedCardId].name = action.payload;
            break;
        case "changeBoard":
            state = {
                ...state,
                selectedBoardId: action.payload
            };
            break;
        case "setCardandLisId":
            state = {
                ...state,
                selectedCardId: action.payload.cardId,
                selectedListId: action.payload.listId
            };
            break;
        case "setLisId":
            state = {
                ...state,
                selectedListId: action.payload
            };
            break;
        case "newBoardToggle":
            state = {
                ...state,
                newBoard: !state.newBoard
            };
            break;
        case "newBoard":
            state = {
                ...state,
                newBoard: !state.newBoard
            };
            const newBoard = {
                name: action.payload,
                starred: false,
                date: "",
                time: "",
                category: [
                    {
                        name: "new list",
                        cards: [
                            {
                                name: "sample card",
                                description: "this is ths description",
                                comments: [
                                    {
                                        comment: "this is the comment",
                                        by: "owner",
                                        time: "time",
                                        date: "date"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
            state.boards.push(newBoard);
            break;
        case "newCard":
            state = {
                ...state
            };
            const card = {
                name: action.payload,
                description: "this is ths description",
                comments: [
                    {
                        comment: "this is the comment",
                        by: "owner",
                        time: "time",
                        date: "date"
                    }
                ]
            }
            state.boards[state.selectedBoardId].category[state.selectedListId].cards.push(card);
            break;
        case "newList":
            state = {
                ...state
            };
            const list = {
                name: action.payload,
                cards: []
            }
            state.boards[state.selectedBoardId].category.push(list);
            break;
        default:
            state = { ...state }
            break;
    }
    return state;

};

export default boardReducer;