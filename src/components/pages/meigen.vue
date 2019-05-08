<template>
  <div>
    <div>
      <p>Beeeno迷言 (一部抜粋)</p>
        <input v-model="findWord" placeholder="検索ワード入力">
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
        items:[
                '深みにハマるとこはハマっていかないと',
                'あれ？もしかして優先度間違えた？？',
                'まあ見せてないからね(実力)',
                'あぁ...なんかお腹痛くなってきた',
                'あぁ...なんか眠くなってきた',
                '生きるのって難しいね(ｷﾘｯ',
                '張っ倒すぞ！',
                'なんかよく分かんないけど気持ち悪い',
                'Twitterしよッ（使命感）',
                '出来るか出来ないかなんて、やってみないと分からんよなぁ',
                'Perfumeは3人でPerfumeだから（怒）',
                '小学生を友達に持った覚えはない',
                '色鉛筆...（チラッ）',
                'モンエナ2本目やわぁ（チラッ）',
                '誰とは言わんが おい、その辺にしとけよ',
                '研究室のデスクがまた狭くなってしまった！',
                'ラウワン行きが決定',
                '夜は自己嫌悪で忙しい',
                '暇つぶし？ それは違う、私にとっては生き甲斐なんだよ…',
                'やっぱり風邪引いてたわ（大嘘）',
                'C言語7年目です！',
        ],
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
