<template>
<li :class="cssClass">
  <a :href="href" :class="['gallery-item', sold ? 'gallery-item--sold' : null]">
    <div class="gallery-item__img">
      <img :src="`img/${imgSrc}.jpg`" :srcset="`img/${imgSrc}@2x.jpg 2x`" :alt="title">
    </div>
    <div class="gallery-item__content">
      <h3 class="gallery-item__title">{{title}}</h3>
      <div class="gallery-item__footer">
        <p v-if="!sold" class="gallery-item__price">
          <span v-if="oldPrice" class="gallery-item__old-price">{{oldPrice}}</span>
          <span class="gallery-item__current-price">{{price}}</span>
        </p>
        <p v-else class="gallery-item__price">
          <span>Продана на аукционе</span>
        </p>
        <app-button v-if="!sold" :css-class="'gallery-item__btn'" :in-cart="inCart" :id="id" :loading="loading" @btn-click="addToCart(id)">{{ inCart ? 'В корзине' : 'Купить' }}</app-button>
      </div>
    </div>
  </a>
</li>
</template>

<script>
import AppButton from "@/components/ui/AppButton";
import {useStore} from "vuex";

export default {
  name: "AppGalleryItem",
  components: {AppButton},
  props: {
    id: {type: String, required: true},
    cssClass: {type: String, required: false},
    href: {type: String, required: false},
    title: {type: String, required: true},
    price: {type: String, required: false},
    oldPrice: {type: String, required: false},
    imgSrc: {type: String, required: true},
    inCart: {type: Boolean, required: false},
    sold: {type: Boolean, required: false},
    loading: {type: Boolean, required: false},
  },
  setup() {
    const store = useStore()

    const addToCart = (id) => {
      document.activeElement.blur()
      store.dispatch('loadPeople', id)
    }
    return {
      addToCart,
    }
  },
}
</script>
