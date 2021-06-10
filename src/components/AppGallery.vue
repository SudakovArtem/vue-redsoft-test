<template>
<section class="gallery">
  <h2 class="h2">Картины эпохи Возрождения</h2>
  <ul class="gallery__list">
    <app-gallery-item
        v-for="item in galleryItems"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :img-src="item.imgSrc"
    >

    </app-gallery-item>
  </ul>
</section>
</template>

<script>
import AppGalleryItem from "@/components/AppGalleryItem";
export default {
  name: "AppGallery",
  components: {AppGalleryItem},
  data() {
    return {
      galleryItems: [
        {id: 'gallery-img1', title: '«Рождение Венеры» Сандро Боттичелли', price: '1 000 000 $', oldPrice: '2 000 000 $', imgSrc: 'gallery-img1'},
        {id: 'gallery-img2', title: '«Тайная вечеря»  Леонардо да Винчи', price: '3 000 000 $', oldPrice: null, imgSrc: 'gallery-img2'},
        {id: 'gallery-img3', title: '«Сотворение Адама» Микеланджело', price: '5 000 000 $', oldPrice: '2 000 000 $', imgSrc: 'gallery-img3'},
        {id: 'gallery-img4', title: '«Урок анатомии»  Рембрандт', price: null, oldPrice: null, imgSrc: 'gallery-img4'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
