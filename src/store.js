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
        ['https://images.unsplash.com/photo-1530947443747-bcaaacd048d0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4195ca00b6861f813b5d6c8cc9b84a9&auto=format&fit=crop&w=1401&q=80',
            'https://images.unsplash.com/photo-1490237014491-822aee911b99?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c6c99dec73e55acf9dbf720ec37f6b0a&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f176d8cadc12e08f25602e93d1388bb2&auto=format&fit=crop&w=1350&q=80'
        ],
        [
            'https://images.unsplash.com/photo-1517784312427-7ec83f3de5fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7a1cb24e407ea0e5f420f5bf2eca5d0&auto=format&fit=crop&w=1350&q=80',
            'https://images.unsplash.com/photo-1467173572719-f14b9fb86e5f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14fc993a6e26bbde4869a42f7969ba02&auto=format&fit=crop&w=1351&q=80',
            'https://images.unsplash.com/photo-1443428018053-13da55589fed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b35cc27d9893369c5f85d539765af84&auto=format&fit=crop&w=1350&q=80'
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