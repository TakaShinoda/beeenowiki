(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,t,n){"use strict";n.r(t);var r={layout:"default",data:function(){return{overtime:10}},computed:{benzenIncluded:function(){return this.overtime/10},printBenzen:function(){for(var e=Math.floor(this.overtime/10),t="",i=0;i<e;i++)t+="⌬";return t},isKaroshi:function(){var e="";return this.overtime>=150?e="カワウソになりました。":this.overtime>=100?e="過労死しました。":this.overtime>=80&&(e="過労死ラインを超えました。"),e}},head:function(){return{title:"benzen"}}},o=n(7),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("p",[e._v("あなたの残業時間は？")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.overtime,expression:"overtime",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.overtime},on:{input:function(t){t.target.composing||(e.overtime=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v("時間\n    "),n("p",[n("big",[e._v("ベンゼン環 "+e._s(e.benzenIncluded)+" 個獲得です！")]),e._v(" "),n("br"),e._v("\n      "+e._s(e.isKaroshi)+"\n    ")],1),e._v(" "),n("p",[n("font",{attrs:{size:"7"}},[n("big",[e._v(e._s(e.printBenzen))])],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);