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
        case "changeDragList":
            state = {
                ...state,
                draggingListId: action.payload
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
        case "toggleMenuShow":
            state = {
                ...state,
                showMenu: !state.showMenu
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
                        name: "Sample list",
                        cards: [
                            {
                                name: "sample card",
                                description: "This is the description of the card",
                                comments: []
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
                description: "",
                comments: []
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
        case "toggleStar":
            state = {
                ...state
            };
            state.boards[state.selectedBoardId].starred = !state.boards[state.selectedBoardId].starred;
            break;
        case "toggleStarFromMenu":
            state = {
                ...state
            };
            state.boards[action.payload].starred = !state.boards[action.payload].starred;
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
        default:
            state = { ...state }
            break;
    }
    return state;

};

export default boardReducer;