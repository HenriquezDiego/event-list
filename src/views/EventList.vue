<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>
<script>
import EventCard from "@/components/EnventCard.vue";
import BaseIcon from "@/components/BaseIcon.vue";
export default {
  components: {
    EventCard,
    BaseIcon,
  },
};
</script>
