<template>
  <div class="catalog">
    <div class="catalog-wrapper wrapper">
      <div class="catalog__category">
        <div class="catalog__item">
          <div class="catalog__item-wrap">
            <a href="/" class="catalog__link" title="Велосипеды">
              <div class="catalog__category-image">
                <img src="../assets/images/bicycle.png" alt="Велосипеды">
              </div>
              <span>Велосипеды</span>
            </a>
          </div>
        </div>
        <div class="catalog__item">
          <a href="/" class="catalog__link" title="Велосипеды">
            <div class="catalog__category-image">
              <img src="../assets/images/bicycle.png" alt="Велосипеды">
            </div>
            <span>Велосипеды</span>
          </a>
        </div>
      </div>
      <div class="catalog-sub">
        <div class="catalog-sub__item">
          <a href="/" class="catalog-sub__link" title="Женские">Женские</a>
          <ul class="catalog-sub__list">
            <li>
              <a href="/" class="catalog-sub__title-sub" title="Горные">Горные</a>
            </li>
            <li>
              <a href="/" class="catalog-sub__title-sub" title="Городские">Городские</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Catalog"
}
</script>

<style scoped>

</style>
