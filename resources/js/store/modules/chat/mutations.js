export default {
    SET_USER_CONVERSATION(state, user) {
        state.userConversation = user;
    },

    REMOVE_USER_CONVERSATION(state) {
        state.userConversation = null;
    },

    ADD_MESSAGES(state, messages) {
        state.messages = messages;
    },

    ADD_MESSAGE(state, message) {
        state.messages.push(message);
    },

    CLEAR_MESSAGES(state) {
        state.messages = [];
    },
};
