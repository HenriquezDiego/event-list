import Vue from "vue";
import Vuex from "vuex";
import EventServcies from "@/services/EventService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Diego Henriquez",
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    events: [],
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventServcies.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
  },
  modules: {},
});
