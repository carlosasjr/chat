export default {
    allUsers(state) {
        let users = state.users.data;
        const usersOnline = state.onlineUsers;

        users = users.sort(function (user) {
            let index = usersOnline.findIndex(
                (item) => item.email === user.email
            );

            user.online = index != -1;

            return index == -1 ? 1 : -1;
        });

        return users;
    },
};
