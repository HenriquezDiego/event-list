import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventService.js";
import * as notification from "@/store/modules/notification.js";

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
    event: {},
    totalPages: 0,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_TOTALPAGE(state, count) {
      state.totalPages = count;
    },
    SET_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit("ADD_EVENT", event);
      });
    },
    getEvents({ commit, dispatch }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then((response) => {
          let totalEvents = response.headers["x-total-count"];
          let totalPages = totalEvents / perPage;
          commit("SET_TOTALPAGE", totalPages);
          commit("SET_EVENTS", response.data);
        })
        .catch((error) => {
          const notification = {
            type: "error",
            message: "There was a problem fetching events: " + error.message,
          };
          dispatch("notification/add", notification, { root: true });
        });
    },
    getEvent({ commit, getters, dispatch }, id) {
      let event = getters.getEventById(id);
      if (event) {
        commit("SET_EVENT", event);
      } else {
        EventService.getEvent(id)
          .then((response) => {
            commit("SET_EVENT", response.data);
          })
          .catch((error) => {
            const notification = {
              type: "error",
              message: "There was a problem fetching event: " + error.message,
            };
            dispatch("notification/add", notification, { root: true });
          });
      }
    },
  },
  getters: {
    getEventById: (state) => (id) => {
      return state.events.find((e) => e.id === id);
    },
  },
  modules: {
    notification,
  },
});
