import axios from "axios";

export default {
    getMessagesConversation({ state, commit }) {
        commit("CLEAR_MESSAGES");
        return axios
            .get(`/api/v1/messages/${state.userConversation.id}`)
            .then((response) => {
                commit("ADD_MESSAGES", response.data.data);
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
};
