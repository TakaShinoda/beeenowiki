<template>
  <div>
    <div>
      <p>あなたの残業時間は？</p>
      <input v-model.number="overtime" type="number">時間
      <p><big>ベンゼン環 {{benzenIncluded}} 個獲得です！</big></p>
      <p><font size="7"><big>{{printBenzen}}</big></font></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return { overtime: 10 };
  },
  computed: {
    benzenIncluded: function() {
      return this.overtime / 10;
    },
    printBenzen: function() {
      const times = Math.floor(this.overtime / 10);
      let benzen = "";
      for (let i = 0; i < times; i++) {
        benzen += "⌬";
      }
      return benzen;
    }
  },
  head() {
    return {
      title: "benzen"
    };
  }
};
</script>