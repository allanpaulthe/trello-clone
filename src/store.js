import { createStore } from 'redux';
import boardReducer from './reducers/boardReducer'

const initial = {
    newBoard: false,
    editCard: false,
    cardClick:false,
    selectedBoardId: '',
    selectedListId: '',
    selectedCardId: '',
    editX: 0,
    editY: 0,
    boards: [
        {
            name: "Welcome Board",
            starred: true,
            date: "date",
            time: "time",
            category: [
                {
                    name: "Stuff to try(this is a list)",
                    cards: [
                        {
                            name: "Cards do many cool things. Click on this card to open it and learn more...",
                            description: "this is ths description",
                            comments: [
                                {
                                    comment: "this is the comment",
                                    by: "owner",
                                    time: "time",
                                    date: "date"
                                }
                            ]
                        },
                        {
                            name: "Add all the cards and lists you need.",
                            description: "this is ths description",
                            comments: [
                                {
                                    comment: "this is the comment",
                                    by: "owner",
                                    time: "time",
                                    date: "date"
                                }
                            ]
                        },
                        {
                            name: "Add members to a board (via the sidebar) to collaborate, share and discuss.",
                            description: "this is ths description",
                            comments: [
                                {
                                    comment: "this is the comment",
                                    by: "owner",
                                    time: "time",
                                    date: "date"
                                }
                            ]
                        },
                        {
                            name: "You can also see board activity, change the background and more. ",
                            description: "this is ths description",
                            comments: [
                                {
                                    comment: "this is the comment",
                                    by: "owner",
                                    time: "time",
                                    date: "date"
                                }
                            ]
                        }, {
                            name: "Use the + in the top menu to make your first board now.",
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
                        , {
                            name: "There's lots more magic...",
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
                },
                {
                    name: "Tried it(another list)",
                    cards: [
                        {
                            name: "This is a card. Drag it onto 'Tried it' to show it's done.",
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
    ]
};

function loadState() {
    try {
        let serializedState = localStorage.getItem("trello-state");

        if (serializedState === null) {
            return this.initializeState();
        }

        return JSON.parse(serializedState);
    }
    catch (err) {
        return initializeState();
    }
}

function initializeState() {
    return initial;
};


const store = createStore(boardReducer, loadState());

store.subscribe(() => {
    saveStateToLocal(store.getState());
});

function saveStateToLocal(state) {
    let serializedState = JSON.stringify(state);
    localStorage.setItem("trello-state", serializedState);
}


export default store;