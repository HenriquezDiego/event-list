import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";

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
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    getEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
