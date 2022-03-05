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
};
