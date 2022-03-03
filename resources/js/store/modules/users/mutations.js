export default {
    ADD_ALL_USERS(state, users) {
        state.users = users;
    },

    ADD_ONLINE_USERS(state, users) {
        state.onlineUsers = users;
    },

    ADD_ONLINE_USER(state, user) {
        state.onlineUsers.unshift(user);
    },

    REMOVE_ONLINE_USER(state, user) {
        state.onlineUsers = state.onlineUsers.filter((value) => {
            return value.email != user.email;
        });
    },
};
