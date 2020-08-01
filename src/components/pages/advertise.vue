<template>
  <div>
    <div>
      <p>お知らせ</p>
      <p v-html="content1"></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return { content1: '9/21,22名古屋でミュージカル出ます。<a href="https://commonbeat.org/project/musical-acb/52nd/">詳しくはココ</a>'};
  },
  head() {
    return {
      title: "advertise"
    };
  }
};
</script>
