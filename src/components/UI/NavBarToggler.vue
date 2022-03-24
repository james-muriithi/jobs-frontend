
<template>
  <button
    class="btn"
    :class="{ open }"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
    @click="toggleOpen"
  >
    <span></span>
    <span></span>
    <span></span>
    <teleport to="#app">
      <small-screen-nav :open="open" @close="toggleOpen" />
    </teleport>
  </button>
</template>

<script>
import SmallScreenNav from "./SmallScreenNav.vue";
export default {
  components: { SmallScreenNav },
  name: "NavBarToggler",
  props: {},
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  width: 60px;
  height: 40px;
  text-align: center;
  span {
    display: block;
    position: absolute;
    right: 0;
    margin-bottom: 5px;
    height: 2px;
    width: 33px;
    background-color: $white;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }
  &.open span:nth-child(1) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(45deg);
    top: 15px;
    right: 4px;
  }
  &.open span:nth-child(2) {
    display: none;
  }
  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 15px;
    right: 4px;
  }
  @for $i from 0 through 2 {
    :nth-child(#{$i + 1}) {
      top: 7px + ($i * 8);
    }
  }
  &:focus {
    box-shadow: none;
  }
}
</style>