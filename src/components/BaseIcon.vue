<template>
  <div>
    <div class="icon-wrapper" v-html="svg"></div>
    <slot></slot>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 20,
    },
    height: {
      type: [Number, String],
      default: 20,
    },
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: "icon",
        width: this.width,
        height: this.height,
      });
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
  margin-right: 7px;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
