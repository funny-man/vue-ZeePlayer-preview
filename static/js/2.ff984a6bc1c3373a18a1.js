webpackJsonp([2],{"0IpB":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("qwAB"),a=i("y/jF"),o=i("3Q4o"),c={props:{data:{type:Array,default:null}},data:function(){return{scrollY:-1,curIndex:0,diff:0,fixedTop:0}},created:function(){this.listenScroll=!0,this.probeType=3,this.touch={},this.listGroupHeight=[]},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.data[this.curIndex]?this.data[this.curIndex].title:""}},methods:{refresh:function(){this.$refs.listview.refresh()},selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var e=Object(o.b)(t.target,"index"),i=t.touches[0];this.touch.y1=i.pageY,this.touch.anchorIndex=e,this._scrollTo(e,500)},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var i=(this.touch.y2-this.touch.y1)/18|0,s=this.touch.anchorIndex+i;this._scrollTo(s,500)},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t,e){null!==t&&(t<0?t=0:t>this.listGroupHeight.length-2&&(t=this.listGroupHeight.length-2),this.$refs.listview.scrollToElement(this.$refs.listgroup[t],e))},_calculateHeight:function(){this.listGroupHeight=[];var t=this.$refs.listgroup,e=0;this.listGroupHeight.push(e);for(var i=0;i<t.length;i++){e+=t[i].clientHeight,this.listGroupHeight.push(e)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var e=this.listGroupHeight;if(t>0)this.curIndex=0;else for(var i=0;i<e.length-1;i++){var s=e[i],n=e[i+1];if((s=-t||s<-t)&&-t<n)return this.curIndex=i,void(this.diff=n+t)}},diff:function(t){var e=this.diff>0&&this.diff<36?t-36:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}},components:{Scroll:r.a,Loading:a.a}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[i("ul",{ref:"listct"},t._l(t.data,function(e,s){return i("li",{key:s,ref:"listgroup",refInFor:!0},[i("h4",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.items,function(e){return i("li",{key:e.id,staticClass:"list-group-items",on:{click:function(i){t.selectItem(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar",attrs:{alt:""}}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchStart(e)},touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)}}},[i("ul",t._l(t.shortcutList,function(e,s){return i("li",{key:s,class:{select:s===t.curIndex},attrs:{"data-index":s}},[t._v(t._s(e))])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollY<=0,expression:"scrollY<=0"}],ref:"fixed",staticClass:"fixed-title-ct"},[i("h4",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-ct"},[i("loading")],1)])},staticRenderFns:[]};var u=i("VU/8")(c,l,!1,function(t){i("27+e")},"data-v-7e1a48c4",null).exports,h=i("Sgn/"),f=i("0aAL"),d=i("TOkD"),g=i("NYxO"),v={mixins:[i("F4+m").b],data:function(){return{singerData:[]}},created:function(){this._getSinger()},methods:n()({handlePlaylist:function(t){var e=t.length>0?"74px":"";this.$refs.list.$refs.listct.style.paddingBottom=e,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSinger:function(){var t=this;Object(h.a)().then(function(e){e.code===d.a&&(t.singerData=t._normalizeSinger(e.data.list))})},_normalizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,i){i<10&&e.hot.items.push(new f.a({name:t.Fsinger_name,id:t.Fsinger_mid}));var s=t.Findex;e[s]||(e[s]={title:s,items:[]}),e[s].items.push(new f.a({name:t.Fsinger_name,id:t.Fsinger_mid}))});var i=[],s=[],n=[];for(var r in e){var a=e[r];a.title.match(/[a-zA-Z]/)?s.push(a):"热门"===a.title?i.push(a):(a.title="#",n.push(a))}var o={items:[],title:"#"};return n.forEach(function(t,e){o.items=o.items.concat(t.items)}),s.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),i.concat(o,s)}},Object(g.d)({setSinger:"SET_SINGER"})),components:{listView:u}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"singer",attrs:{id:"singer"}},[e("list-view",{ref:"list",attrs:{data:this.singerData},on:{select:this.selectSinger}}),this._v(" "),e("transition",{attrs:{name:"slide-fade"}},[e("router-view")],1)],1)},staticRenderFns:[]};var m=i("VU/8")(v,p,!1,function(t){i("g+B4")},"data-v-54346a27",null);e.default=m.exports},"27+e":function(t,e){},"Sgn/":function(t,e,i){"use strict";e.a=function(){var t=n()({},a.b,{channel:"singer",page:"list",key:"all_all_all",pagesize:"100",pagenum:"1",hostUin:0,needNewCode:0,platform:"yqq",g_tk:1664029744});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,a.c)},e.b=function(t){var e=n()({},a.b,{hostUin:0,needNewCode:0,platform:"yqq",order:"listen",begin:0,num:50,songstatus:1,g_tk:2122270467,singermid:t});return Object(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,a.c)};var s=i("woOf"),n=i.n(s),r=i("Gak4"),a=i("TOkD")},"g+B4":function(t,e){}});
//# sourceMappingURL=2.ff984a6bc1c3373a18a1.js.map