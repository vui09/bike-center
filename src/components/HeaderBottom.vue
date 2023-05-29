<template>
  <div class="header-bottom" id="header-bottom">
    <a href="/">
      <img class="logo-small hidden" id="logo-small" src="../assets/images/logo-small.svg" alt="">
    </a>
    <div class="header-bottom__wrap wrapper">
      <div class="header-bottom__btn">
        <span class="burger">
          <span></span>
        </span>
        Каталог
      </div>
      <input class="header-bottom__search" type="text" placeholder="Поиск по товарам">
      <div class="header-bottom__link">
        <div class="header-bottom__item">
          <a href="/" class="header-bottom__item-wrap">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5555 21V18.7778C20.5555 17.5991 20.0404 16.4686 19.1235 15.6351C18.2067 14.8016 16.9632 14.3334 15.6666 14.3334H5.88886C4.59226 14.3334 3.34875 14.8016 2.43192 15.6351C1.51508 16.4686 1 17.5991 1 18.7778V21" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.3888 10C12.874 10 14.8888 7.98528 14.8888 5.5C14.8888 3.01472 12.874 1 10.3888 1C7.90348 1 5.88876 3.01472 5.88876 5.5C5.88876 7.98528 7.90348 10 10.3888 10Z" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="name">Войти</span>
          </a>
        </div>
        <div class="header-bottom__item">
          <a href="/" class="header-bottom__item-wrap">
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5554 8H19.5554C20.6554 8 21.5554 8.9 21.5554 10V19C21.5554 20.1 20.6554 21 19.5554 21H10.5554C9.45542 21 8.55542 20.1 8.55542 19V10C8.55542 8.9 9.45542 8 10.5554 8Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.55542 14H3.55542C2.45542 14 1.55542 13.1 1.55542 12V3C1.55542 1.9 2.45542 1 3.55542 1H12.5554C13.6554 1 14.5554 1.9 14.5554 3V4" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.0554 17.5V11.5" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.0554 14.5H18.0554" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="name">Сравнение</span>
          </a>
        </div>
        <div class="header-bottom__item">
          <a href="/" class="header-bottom__item-wrap">
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5514 2.76815C21.022 2.20759 20.3934 1.76292 19.7016 1.45954C19.0097 1.15615 18.2682 1 17.5193 1C16.7704 1 16.0289 1.15615 15.337 1.45954C14.6452 1.76292 14.0166 2.20759 13.4872 2.76815L12.3885 3.93095L11.2898 2.76815C10.2204 1.6364 8.76999 1.00059 7.25766 1.00059C5.74533 1.00059 4.29495 1.6364 3.22557 2.76815C2.15619 3.89989 1.55542 5.43487 1.55542 7.03541C1.55542 8.63594 2.15619 10.1709 3.22557 11.3027L4.32429 12.4655L12.3885 21L20.4527 12.4655L21.5514 11.3027C22.081 10.7424 22.5012 10.0771 22.7879 9.34495C23.0745 8.61276 23.2221 7.82796 23.2221 7.03541C23.2221 6.24285 23.0745 5.45806 22.7879 4.72587C22.5012 3.99368 22.081 3.32844 21.5514 2.76815Z" fill="white" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="name">Избранное</span>
          </a>
        </div>
        <div class="header-bottom__item">
          <a href="/" class="header-bottom__item-wrap">
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.07 21.9089C9.70671 21.9089 10.2229 21.3927 10.2229 20.756C10.2229 20.1193 9.70671 19.6031 9.07 19.6031C8.43328 19.6031 7.91711 20.1193 7.91711 20.756C7.91711 21.3927 8.43328 21.9089 9.07 21.9089Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.4465 21.9089C20.0832 21.9089 20.5994 21.3927 20.5994 20.756C20.5994 20.1193 20.0832 19.6031 19.4465 19.6031C18.8098 19.6031 18.2936 20.1193 18.2936 20.756C18.2936 21.3927 18.8098 21.9089 19.4465 21.9089Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H4.98268L7.65108 14.332C7.74213 14.7904 7.99151 15.2022 8.35556 15.4953C8.71961 15.7883 9.17515 15.944 9.64242 15.9351H19.3203C19.7876 15.944 20.2431 15.7883 20.6072 15.4953C20.9712 15.2022 21.2206 14.7904 21.3117 14.332L22.9047 5.97835H5.97835" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="name">Корзина</span>
          </a>
          <span class="quantity">22</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBottom"
}
</script>

<style scoped>

</style>
