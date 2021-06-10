<template>
<li :class="['gallery-item', cssClass]">
  <a :href="href" class="gallery-item__link">
    <div class="gallery-item__img">
      <img :src="'../assets/img/'+ imgSrc + '.jpg'" :srcset="'../assets/img/'+ imgSrc + '@2x.jpg'" :alt="title">
    </div>
    <h3 class="gallery-item__title">{{title}}</h3>
    <div class="gallery-item__footer">
      <p v-if="price" class="gallery-item__price">
        <span v-if="oldPrice">{{oldPrice}}</span>
        <span >{{price}}</span>
      </p>
      <button class="gallery-item__btn btn">Купить</button>
    </div>
  </a>
</li>
</template>

<script>
export default {
  name: "AppGalleryItem",
  props: {
    cssClass: {
      type: String,
      required: false
    },
    href: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    oldPrice: {
      type: String,
      required: false
    },
    imgSrc: {
      type: String,
      required: true
    },
  },
}
</script>

<style scoped>

</style>
