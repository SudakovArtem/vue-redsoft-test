<template>
  <div class="wrapper">
    <TheHeader/>
    <main>
      <AppGallery/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import AppGallery from "./components/AppGallery";
import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',
  components: {
    TheFooter,
    AppGallery,
    TheHeader,
  }
}
</script>
