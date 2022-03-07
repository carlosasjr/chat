<template>
    <div
        class="chat-container relative"
        :class="{ 'has-oppened': hasUserChat }"
    >
        <users :title="'Usuários'" :all-users="allUsers"></users>
        <conversation></conversation>
    </div>
</template>

<script>
import Users from "../components/Chat/Users.vue";
import Conversation from "../components/Chat/Conversation.vue";

import { mapActions, mapGetters } from "vuex";

export default {
    mounted() {
        this.getUsers();
    },

    computed: {
        ...mapGetters(["allUsers", "userConversation"]),

        hasUserChat() {
            return this.userConversation != null;
        },
    },

    methods: {
        ...mapActions(["getUsers"]),
    },

    components: {
        Users,
        Conversation,
    },
};
</script>
