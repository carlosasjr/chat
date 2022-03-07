import axios from "axios";

const CONFIGS = {
    headers: {
        "content-type": "multipart/form-data",
    },
};

export default {
    getMyFavorites({ state, commit }) {
        return axios.get("/api/v1/favorites/").then((response) => {
            commit("SET_MY_FAVORITES", response.data.data);
        });
    },

    setNewFavorite({ commit }, user) {
        return axios
            .post("/api/v1/favorites/create", {
                user: user.id,
            })
            .then((response) => {
                commit("SET_USER_FAVORITE", user);
            });
    },

    removeFavorite({ commit }, user) {
        return axios
            .delete("/api/v1/favorites/delete", {
                data: {
                    user: user.id,
                },
            })
            .then((response) => {
                commit("REMOVE_USER_FAVORITE", user);
            });
    },

    getMe({ commit }) {
        return axios
            .get("api/v1/profile/me")
            .then((response) => commit("SET_ME", response.data.data));
    },

    updatePhotoProfile({ commit, dispatch }, formData) {
        formData.append("_method", "PATCH");

        return axios
            .post("/api/v1/profile/update-photo", formData, CONFIGS)
            .then((response) => dispatch("getMe"));
    },

    update({ commit, dispatch }, data) {
        return axios
            .put("/api/v1/profile/update", data)
            .then((response) => dispatch("getMe"));
    },

    toogleNotify({ commit, state }) {
        axios.put("/api/v1/profile/update-preference", {
            me_notify: state.me.preference.me_notify,
        });
    },

    updateImageChat({ commit, dispatch }, formData) {
        formData.append("_method", "PATCH");

        return axios
            .post("/api/v1/profile/update-image-chat", formData, CONFIGS)
            .then((response) => dispatch("getMe"));
    },

    removeImageChat({ dispatch }) {
        return axios
            .patch("/api/v1/profile/remove-image-chat")
            .then((response) => dispatch("getMe"));
    },
};
