import { createStore } from 'redux';
import boardReducer from './reducers/boardReducer'

const initial = {
    newBoard: false,
    editCard: false,
    selectedBoardId: '',
    selectedCardId: '',
    selectedListId: '',
    editX: 0,
    editY: 0,
    boards: [
        {
            name: "my board dfsd",
            starred: true,
            date: "date",
            time: "time",
            category: [
                {
                    name: "category name",
                    cards: [
                        {
                            name: "card name1",
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
                            name: "card name2",
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
                            name: "card name3",
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
                            name: "card name4",
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
                            name: "card name5",
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
                    name: "category name",
                    cards: [
                        {
                            name: "card name1",
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
                            name: "card name2",
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
                            name: "card name3",
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
                            name: "card name4",
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
                            name: "card name5",
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
                            name: "card name4",
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