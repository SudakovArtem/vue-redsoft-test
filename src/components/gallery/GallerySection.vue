<template>
<section class="gallery container">
  <h1 class="visually-hidden">Галерея</h1>
  <h2 class="h2 gallery__title">Картины эпохи Возрождения</h2>
  <ul class="gallery__list">
    <gallery-item
        v-for="item in galleryItems"
        href="#"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :old-price="item.oldPrice"
        :img-src="item.imgSrc"
        css-class="gallery__item"
        :in-cart="item.inCart"
        :sold="item.sold"
        :loading="item.loading"
    >
    </gallery-item>
  </ul>
</section>
</template>

<script>
import GalleryItem from "@/components/gallery/GalleryItem";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "AppGallery",
  components: {GalleryItem},
  setup() {
    const store = useStore()
    store.commit('loadGallery')

    const galleryItems = computed(() => store.getters.galleryItems)

    return {
      galleryItems,
    }
  },
}
</script>
