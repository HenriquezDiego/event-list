<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev page</router-link
      >
      |
    </template>
    <template v-if="page <= totalPages">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
      >
        Next page</router-link
      >
    </template>
  </div>
</template>
<script>
import EventCard from "@/components/EnventCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch("getEvents", {
      perPage: 3,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["events", "totalPages"]),
  },
};
</script>
