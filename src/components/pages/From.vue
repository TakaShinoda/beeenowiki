<template>
  <div>
    <label>
      <input type = "checkbox" v-model="isOk">
      Beeenoは修羅の国出身ですか？
    </label>
    <transition>
      <p v-if="isOK">張っ倒すぞ！！</p>
		</transition>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      isOK: false
    } 
  },
  head() {
    return {
      title: "from",
    };
  }
};
</script>

<style>
	/* 現れている最中と、消えている最中は、0.5秒 */
	.v-enter-active, .v-leave-active {
		transition: 0.5s;
	}
	/* 現れる前の状態と、消えたときの状態は、透明度0で、下へ20移動*/
	.v-enter, .v-leave-to {
		opacity: 0;
		transform: translateY(20px)
	}
</style>