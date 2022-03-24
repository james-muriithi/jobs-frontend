<template>
  <nav class="navbar navbar-expand-md navbar-light bg-primary pb-1 fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand text-white fw-bold" href="#">
        Code<span class="text-light">Jobs</span>
      </a>

      <nav-bar-toggler class="navbar-toggler border-0" />

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="menu in menus" :key="menu.name">
            <router-link :to="menu.url" class="nav-link">
              {{ menu.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <button class="btn px-4">Login</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavBarToggler from "./NavBarToggler.vue";
import Mixins from '@/mixins.js';

export default {
  components: { NavBarToggler },
  name: "TheNavBar",
  mixins: [Mixins],
};
</script>

<style lang="scss" scoped>
nav {
  .text-light {
    color: darken($color: $white, $amount: 10);
  }
  .nav-item {
    font-size: 17px;
    font-weight: normal;
    padding-left: 20px;
    .nav-link {
      color: darken($white, 10);
      &.router-link-exact-active,
      &:hover {
        color: $white;
        border-color: $white;
      }
    }

    button {
      border: 2px solid darken($color: $white, $amount: 10);
      color: darken($color: $white, $amount: 10);
      padding-top: 4px;
      padding-bottom: 4px;
      @include transition;
      &:hover {
        color: $white;
        border-color: $white;
      }
    }
  }
}
</style>