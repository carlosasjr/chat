import store from "./store";

window.Echo.join("larachat_database_chatroom")
    .here((users) => {
        console.log("online", users);

        store.commit("ADD_ONLINE_USERS", users);
    })
    .joining((user) => {
        console.log("online", user);

        store.commit("ADD_ONLINE_USER", user);
    })
    .leaving((user) => {
        console.log("saiu", user);

        store.commit("REMOVE_ONLINE_USER", user);
    });
