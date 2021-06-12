<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li class="main-nav__item" v-for="item in mainNavLinks">
        <a class="main-nav__link" :href="item.href">{{item.text}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "AppNav",
  setup() {
    const store = useStore()
    const mainNavLinks = computed(() => store.getters.mainNavLinks)

    return {
      mainNavLinks
    }
  }
}
</script>
