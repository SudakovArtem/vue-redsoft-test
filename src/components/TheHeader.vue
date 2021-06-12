<template>
<header class="header">
  <div class="header__wrapper container">
    <app-logo css-class="header__logo"></app-logo>
    <app-nav></app-nav>
    <app-search-form></app-search-form>
  </div>
</header>
</template>

<script>
import AppSearchForm from "@/components/AppSearchForm";
import AppLogo from "@/components/AppLogo";
import AppNav from "@/components/AppNav";

export default {
  name: "TheHeader",
  components: {AppNav, AppLogo, AppSearchForm},
}
</script>
