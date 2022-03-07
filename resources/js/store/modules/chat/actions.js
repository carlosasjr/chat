import axios from "axios";

export default {
    getMessagesConversation({ state, commit, dispatch }) {
        commit("CLEAR_MESSAGES");
        return axios
            .get(`/api/v1/messages/${state.userConversation.id}`)
            .then((response) => {
                commit("ADD_MESSAGES", response.data.data);
                dispatch("markConversationAsRead");
            });
    },

    sendNewMessage({ state, commit }, message) {
        return axios
            .post("/api/v1/messages/create", {
                message,
                receiver_id: state.userConversation.id,
            })
            .then((response) => {
                commit("ADD_MESSAGE", {
                    message,
                    receiver: { ...state.userConversation },
                    me: true,
                });
            });
    },

    markConversationAsRead({ state, commit }) {
        return axios
            .post("/api/v1/messages/mark-as-read", {
                sender: state.userConversation.id,
            })
            .then((response) => {
                commit("CLEAR_TOTAL_UNREAD_MESSAGES", state.userConversation);
            });
    },
};
