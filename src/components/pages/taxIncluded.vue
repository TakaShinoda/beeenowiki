<template>
  <div>
    <div>
      <input v-model.number="price" type="number">円
      <p>消費税込みの金額 {{taxIncluded}} 円</p>
    </div>
    <div>
      <input v-model.number="tax" type="number">
      %
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { price: 100, tax: 8 };
  },
  computed: {
    taxIncluded: function() {
      return this.price * (1+ this.tax / 100);
    }
  }
};
</script>