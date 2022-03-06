<template>
    <div class="chat-container relative">
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
        ...mapGetters(["allFavorites"]),
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
