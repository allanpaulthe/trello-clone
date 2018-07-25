const initial = {
    newBoard: false,
    editBoard: false,
    SelectedBoradName: '',
    SelectedBoardStardred: false,
    SelectedBoardId: '',
    boards: [
        {
            name: "my board",
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
                }
            ]
        }
    ]
};

const boardReducer = (state = initial, action) => {
    switch (action.type) {
        case "ADD":
            alert("haaaaaaaii");
            break;
        default:
            state = {
                ...state
            };
            break;
    }
    return state;

};

export default boardReducer;