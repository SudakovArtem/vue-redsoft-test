<template>
<header>
  <div class="header__wrapper">
    <app-logo css-class="header__logo"></app-logo>
    <nav class="main-nav">
      <ul class="main-nav_list">
        <li class="main-nav__item" v-for="item in mainNavLinks">
          <a :href="item.href">{{item.text}}</a>
        </li>
      </ul>
    </nav>
    <app-search-form></app-search-form>
  </div>
</header>
</template>

<script>
import AppSearchForm from "@/components/AppSearchForm";
import AppLogo from "@/components/AppLogo";
export default {
  name: "TheHeader",
  components: {AppLogo, AppSearchForm},
  data() {
    return {
      mainNavLinks: [
        {text: 'Каталог', href: '#'},
        {text: 'Доставка', href: '#'},
        {text: 'Оплата', href: '#'},
        {text: 'Контакты', href: '#'},
        {text: 'О галерее', href: '#'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
