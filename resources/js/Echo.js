import Vue from "vue";
import store from "./store";

const user_id = window.Laravel.user;

window.Echo.channel(`larachat_database_private-chat.${user_id}`).listen(
    "NewMessageCreated",
    (e) => {
        console.log(e.message);
        let conversation = e.message;

        if (
            store.state.chat.userConversation == null ||
            store.state.chat.userConversation.id != conversation.sender.id
        ) {
            Vue.$vToastify.success(
                `Mensagem: ${conversation.message}`,
                `${conversation.sender.name} enviou uma nova mensagem`
            );
        } else {
            conversation.me = false;
            store.commit("ADD_MESSAGE", conversation);
        }
    }
);

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
