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
import AppSearchForm from "@/components/ui/AppSearchForm";
import AppLogo from "@/components/ui/AppLogo";
import AppNav from "@/components/ui/AppNav";

export default {
  name: "TheHeader",
  components: {AppNav, AppLogo, AppSearchForm},
}
</script>
