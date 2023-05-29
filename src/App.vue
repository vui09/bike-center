<template>
  <Header/>
  <HeaderBottom/>
  <Slider/>
  <Catalog/>
</template>

<script>

import Header from "@/components/Header";
import HeaderBottom from "@/components/HeaderBottom";
import Slider from "@/components/Slider";
import Catalog from "@/components/Catalog";
export default {
  name: 'App',
  components: {Catalog, Slider, Header, HeaderBottom}
}
</script>

<style lang="scss">

</style>
