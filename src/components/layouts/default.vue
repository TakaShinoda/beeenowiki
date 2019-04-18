<template>
  <div>
    <Banner/>
    <NasBeeeno/>
    <nuxt/>
    <Links/>
  </div>
</template>

<script>
import Banner from "../molcules/Banner.vue";
import NasBeeeno from "../atoms/NasBeeeno.vue";
import Links from "../molcules/Links.vue";
export default {
  components: {
    Banner,
    NasBeeeno,
    Links
  }
};
</script>