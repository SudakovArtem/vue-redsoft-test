<template>
  <button :class="['btn', loading ? 'loading' : null, inCart ? 'btn--in-cart' : null, cssClass]" @click.prevent.stop="onButtonClick(id, inCart)">
    <span v-if="loading" class="loader"></span>
    <span v-else>
      <svg v-if="inCart" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5315 4.80937L7.63341 14.237L3.34814 10.1924" stroke="#F4F6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  emits: ['btn-click'],
  props: {
    cssClass: {type: String, required: false},
    id: {type: String, required: true},
    inCart: {type: Boolean, required: false, default: false},
    loading: {type: Boolean, required: false, default: false}
  },

  setup(props, context) {
    const onButtonClick = (id, inCart) => {
      if (!inCart) {
        context.emit('btn-click', id)
      }
    }

    return {
      onButtonClick
    }
  },
  name: "AppButton"
}
</script>
