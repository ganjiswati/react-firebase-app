const AppReducer = (state, action) => {
    switch (action.type) {
        case "REMOVE_USER":
            return {
                users: state.users.filter((user) => {
                    return user.id !== action.payload;
                }),
            };

        case "ADD_USER":
            return {
                users: [action.payload, ...state.users],
            }

        case "EDIT_USER":
            const updatedU=action.payload;
            const updatedUSer=state.users.map((user)=>{
                if(updatedU.id===user.id)
                return updatedU;
                else 
                return user;
            })
           return {user:updatedUSer};

        default:
            return state;

    }
};

export default AppReducer;