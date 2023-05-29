<template>
  <div class="header" id="header">
    <div class="header__wrapper wrapper">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="">
      </div>
      <div class="header__city">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8.10526L16 1L8.89474 16L7.31579 9.68421L1 8.10526Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>
          Ростов-на-Дону
        </span>
      </div>
      <div class="header__phone">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.9995 12.2527V14.5153C16.0004 14.7253 15.9574 14.9332 15.8732 15.1257C15.7891 15.3181 15.6657 15.4909 15.5109 15.6329C15.3561 15.7749 15.1734 15.883 14.9744 15.9503C14.7754 16.0176 14.5646 16.0426 14.3554 16.0237C12.0346 15.7715 9.80532 14.9784 7.84668 13.7083C6.02441 12.5503 4.47945 11.0054 3.3215 9.1831C2.0469 7.21556 1.25368 4.97544 1.00612 2.64422C0.987275 2.43566 1.01206 2.22546 1.0789 2.027C1.14574 1.82855 1.25317 1.64618 1.39436 1.49152C1.53554 1.33686 1.70738 1.21329 1.89893 1.12868C2.09049 1.04407 2.29756 1.00027 2.50697 1.00007H4.76956C5.13558 0.996471 5.49041 1.12608 5.76793 1.36475C6.04546 1.60342 6.22672 1.93486 6.27795 2.29729C6.37345 3.02137 6.55055 3.73232 6.80589 4.41658C6.90736 4.68653 6.92932 4.9799 6.86917 5.26194C6.80902 5.54399 6.66928 5.80288 6.4665 6.00793L5.50867 6.96576C6.58231 8.85393 8.14568 10.4173 10.0338 11.4909L10.9917 10.5331C11.1967 10.3303 11.4556 10.1906 11.7377 10.1304C12.0197 10.0703 12.3131 10.0922 12.583 10.1937C13.2673 10.4491 13.9782 10.6262 14.7023 10.7217C15.0687 10.7733 15.4033 10.9579 15.6424 11.2402C15.8816 11.5225 16.0087 11.8828 15.9995 12.2527Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <a href="tel:8 (861) 202-58-40">
          8 (800) 500-03-20
        </a>
      </div>
      <div class="header__right">
        <div class="header__menu-wrap">
          <ul class="header__menu">
            <li class="header__menu-item">
              <a class="header__menu-link" href="/">О нас</a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="/">Вакансии</a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="/">Оплата</a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="/">Доставка</a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="/">Помощь</a>
            </li>
            <li class="header__menu-item">
              <a class="header__menu-link" href="/">Контакты</a>
            </li>
          </ul>
        </div>
        <div class="header__services-wrap">
          <ul class="header__services">
            <li class="header__services-item">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="#F5F5F5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.5 4V8.5L11.5 10" stroke="#F5F5F5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a class="header__services-link" href="/">
                Прокат оборудования
              </a>
            </li>
            <li class="header__services-item">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2355 4.39672C10.0909 4.54426 10.0099 4.74262 10.0099 4.94921C10.0099 5.1558 10.0909 5.35416 10.2355 5.5017L11.4983 6.76453C11.6458 6.90914 11.8442 6.99015 12.0508 6.99015C12.2574 6.99015 12.4557 6.90914 12.6033 6.76453L15.5788 3.78899C15.9757 4.66601 16.0959 5.64316 15.9233 6.59021C15.7507 7.53726 15.2937 8.40924 14.613 9.08993C13.9323 9.77062 13.0603 10.2277 12.1133 10.4003C11.1662 10.5728 10.1891 10.4526 9.31203 10.0558L3.85819 15.5096C3.5442 15.8236 3.11834 16 2.67429 16C2.23024 16 1.80438 15.8236 1.49039 15.5096C1.1764 15.1956 1 14.7698 1 14.3257C1 13.8817 1.1764 13.4558 1.49039 13.1418L6.94423 7.68797C6.54735 6.81094 6.42719 5.8338 6.59974 4.88675C6.7723 3.93969 7.22938 3.06772 7.91007 2.38703C8.59076 1.70634 9.46273 1.24926 10.4098 1.0767C11.3568 0.904149 12.334 1.02431 13.211 1.42119L10.2434 4.38883L10.2355 4.39672Z" stroke="#F5F5F5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a class="header__services-link" href="/">
                Ремонт и обслуживание
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    handleScroll() {
      const helloElement = document.getElementById('header');
      const results = helloElement.getBoundingClientRect();

      console.log(results)
    },
    created() {
      this.handleScroll()
    }
  },
}
</script>

<style scoped>

</style>
