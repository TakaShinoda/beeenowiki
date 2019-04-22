<template>
  <div>
    <div>
    <p>あなたの残業時間は？</p>
      <input v-model.number="overtime" type="number">時間
      <p>ベンゼン環 {{benzenIncluded}} 個獲得です！</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return { overtime: 100};
  },
  computed: {
    benzenIncluded: function() {
      return this.overtime / 10 ;
    }
  },
  head() {
    return {
      title: "tax"
    };
  }
};
</script>