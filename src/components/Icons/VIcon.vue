<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="dynamicSize"
    :height="dynamicSize"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="icon"
  >
    <keep-alive>
      <component
        :is="dynamicIcon"
        :size="dynamicSize"
      ></component>
    </keep-alive>
  </svg>
</template>

<script>
// https://chasingcode.dev/blog/supercharged-dynamic-vue-svg-icon-component/
// import { colors } from "../../../tailwind";

var services = {
  'mysql': 'database',
  'weewx': 'cloud',
  'time': 'clock',
  'RoPi': 'disk'
}

export default {
  name: "VIcon",
  props: {
    icon: {
      type: String,
      required: false,
      default: "check",
    },
    service: {
      type: String,
      required: false,
      default: "",
    },
    size: {
      type: Number,
      required: false,
      default: 16,
    },
    fill: {
      type: String,
      required: false,
      default: "grey-darkest",
    },
  },
  computed: {
    dynamicIcon: function() {
      var icon = "";
      
      if (this.service != "" && services[this.service] !== undefined ){
        icon = services[this.service];
        console.log(icon);
      } else {
        icon = this.icon
      }

      return () => import(`@/components/Icons/svg/v-${icon}.vue`)
    },
    dynamicSize: function() {
      return this.size; // default size: 24
    },
  },
};
</script>

<style>
svg {
    @apply cursor-pointer;
    @apply inline-block;
    fill: none;
    @apply stroke-current;
}
</style>
