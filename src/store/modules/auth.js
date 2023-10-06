import { loginUser, registerUser } from "../../services/authService";

const initialState = {
  user: null,
  token: "",
};

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);
      const { user, token } = data;

      commit("setUserData", user);
      commit("setToken", token);
    },
    async registerUser({ commit }, payload) {
      const { data } = await registerUser(payload);
      const { user, token } = data;

      commit("setUserData", user);
      commit("setToken", token);
    },
  },
};
