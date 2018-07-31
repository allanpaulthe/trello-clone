import { createStore } from 'redux';
import boardReducer from './reducers/boardReducer';

const initial = {
    newBoard: false,
    editCard: false,
    cardClick: false,
    showMenu: false,
    selectedBoardId: '',
    selectedListId: '',
    selectedCardId: '',
    draggingListId: '',
    droppingListId: '',
    draggingCardId: '',
    droppingCardId: '',
    editX: 0,
    editY: 0,
    selectedNewBoardImage: [0, 0],
    newBoardPic: [
        ['https://images.pexels.com/photos/1265584/pexels-photo-1265584.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&h=350'
        ],
        [
            ' https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&h=350',
            'https://images.pexels.com/photos/73813/balkan-anemone-flower-blossom-bloom-73813.jpeg?auto=compress&cs=tinysrgb&h=350'
        ],
        [
            '#2878bf',
            '#22313F',
            '#FABE58'
        ]
    ],
    boards: [
        {
            name: "Welcome Board",
            starred: true,
            date: "date",
            time: "time",
            BoardImage: [2, 0],
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
        var loadedState = JSON.parse(serializedState);
        loadedState = {
            ...loadedState,
            newBoard: false,
            editCard: false,
            cardClick: false,
            showMenu: false
        }
        return loadedState;
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