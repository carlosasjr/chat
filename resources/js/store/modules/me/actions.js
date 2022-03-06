import axios from "axios";

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
};
