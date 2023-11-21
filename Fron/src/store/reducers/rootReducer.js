const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'Hoi dan it' },
        { id: 3, name: 'Eric va Hoi dan it' }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':

            let users = state.user;
            users = users.filter(item => item.id !== action.payload.id)

            return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }

}

export default rootReducer;