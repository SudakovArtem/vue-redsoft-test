<template>
  <div class="wrapper">
    <TheHeader/>
    <main>
      <GallerySection/>
    </main>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import GallerySection from "@/components/gallery/GallerySection";
import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',
  components: {
    TheFooter,
    GallerySection,
    TheHeader,
  }
}
</script>
