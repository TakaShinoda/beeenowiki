<template>
  <div>
    <div>
      <p>迷言検索</p>
        <input v-model="findWord" placeholder="検索したい迷言キーワード入力">
		<ul>
			<li v-for="item in findItems" v-bind:key='item.id'>{{item}}</li>
		</ul>
    </div>
  </div>
</template>


<script>
export default {
  layout: "default",
  data() {
    return {
        findWord:'',
		items:['桃太郎','花咲かじいさん','浦島太郎','かぐや姫','かちかち山'],
    };
  },
    computed: {
        findItems: function() {
            if (this.findWord) {
                return this.items.filter(function(value) { //配列の置き換え filter()
                    return (value.indexOf(this.findWord) > -1); //javascriptには配列を値から削除する関数が無いらしい。
                }, this);
            } else {
                // this.findWordが空のときは、リストをそのまま返す
                return this.items;
            }
        }
    },
  head() {
    return {
      title: "meigen",
    };
  }
};
</script>
