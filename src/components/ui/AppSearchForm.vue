<template>
<div class="search-form">
  <form action="#">
    <div class="input-wrapper">
      <label>
        <span class="visually-hidden">Поиск</span>
        <input type="text" id="search" name="search" placeholder="Поиск по названию картины" required>
      </label>
    </div>
    <button type="submit" class="btn">Найти</button>
  </form>
</div>
</template>

<script>
export default {
  name: "AppSearchForm"
}
</script>
