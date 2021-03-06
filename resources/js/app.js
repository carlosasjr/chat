require("./bootstrap");

window.Vue = require("vue").default;

import Vue from "vue";
import VueToastify from "vue-toastify";
import store from "./store";
import router from "./router";

Vue.use(VueToastify, {
    position: "top-right",
});

Vue.component("chat-component", require("./layouts/default.vue").default);

const app = new Vue({
    el: "#app",
    store,
    router,
});

store.dispatch("getMe");
