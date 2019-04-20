<template>
  <div>
    <label>
      <input type = "checkbox" v-model="myCheck">
      Beeenoは修羅の国出身ですか？{{myCheck}}
    </label>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      myCheck: false
    } 
  },
  head() {
    return {
      title: "from",
    };
  }
};
</script>