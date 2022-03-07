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
        state.onlineUsers = state.onlineUsers.filter(
            (u) => u.email != user.email
        );
    },

    SET_USER_FAVORITE(state, user) {
        state.users.data = state.users.data.map((item) => {
            if (item.email == user.email) {
                item.isMyFavorite = true;
            }

            return item;
        });
    },

    REMOVE_USER_FAVORITE(state, user) {
        state.users.data = state.users.data.map((item) => {
            if (item.email == user.email) {
                item.isMyFavorite = false;
            }

            return item;
        });
    },

    CLEAR_TOTAL_UNREAD_MESSAGES(state, user) {
        state.users.data.map(function (item) {
            if (item.email == user.email) {
                item.unreadMessage = 0;
            }
            return item;
        });
    },

    UPDATE_UNREAD_MESSAGES(state, user) {
        state.users.data.map(function (item) {
            if (item.email == user.email) {
                item.unreadMessage = parseInt(item.unreadMessage) + 1;
            }
            return item;
        });
    },
};
