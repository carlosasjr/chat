<template>
    <div
        class="chat-container relative"
        :class="{ 'has-oppened': hasUserChat }"
    >
        <users :title="'Favoritos'" :all-users="allFavorites"></users>
        <conversation></conversation>
    </div>
</template>

<script>
import Users from "../components/Chat/Users.vue";
import Conversation from "../components/Chat/Conversation.vue";

import { mapActions, mapGetters } from "vuex";

export default {
    mounted() {
        this.getMyFavorites();
    },

    computed: {
        ...mapGetters(["allFavorites", "userConversation"]),

        hasUserChat() {
            return this.userConversation != null;
        },
    },

    methods: {
        ...mapActions(["getMyFavorites"]),
    },

    components: {
        Users,
        Conversation,
    },
};
</script>
