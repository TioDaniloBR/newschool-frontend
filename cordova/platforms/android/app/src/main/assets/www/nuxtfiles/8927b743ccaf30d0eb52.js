(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{291:function(t,e,r){var content=r(300);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("0557587d",content,!0,{sourceMap:!1})},293:function(t,e,r){"use strict";var n={props:["title","backPage","route"],methods:{comeBackPage:function(){this.route?this.$router.push(this.route):this.$router.back()}}},o=(r(299),r(35)),c=r(42),l=r.n(c),f=r(280),d=r(279),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"head__bar"}},[t.backPage?r("v-btn",{staticClass:"btn-back",attrs:{text:"",icon:""},on:{click:t.comeBackPage}},[r("v-icon",[t._v("mdi-arrow-left")])],1):t._e(),t._v(" "),r("h1",{staticClass:"h1__theme"},[t._v(t._s(t.title))])],1)}),[],!1,null,"576ed64e",null);e.a=component.exports;l()(component,{VBtn:f.a,VIcon:d.a})},299:function(t,e,r){"use strict";var n=r(291);r.n(n).a},300:function(t,e,r){(e=r(24)(!1)).push([t.i,"*[data-v-576ed64e]{font-family:Roboto,sans-serif}.h1__theme[data-v-576ed64e]{font-size:1rem;line-height:1.2;font-weight:900;text-align:center;padding:0 2.5rem!important}#head__bar[data-v-576ed64e]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;padding:1.2rem 0;position:relative;-webkit-box-align:center;align-items:center;background:transparent}[data-v-576ed64e] .btn-back .theme--light.v-icon{color:var(--primary);font-size:35px}[data-v-576ed64e] .btn-back{position:absolute;left:1rem}",""]),t.exports=e},308:function(t,e,r){"use strict";r(298);var n=r(301);e.a=Object(n.a)("flex")},309:function(t,e,r){"use strict";r(298);var n=r(301);e.a=Object(n.a)("layout")},311:function(t,e,r){"use strict";r(26),r(11),r(71),r(36),r(40);var n=r(3),o=(r(46),r(303),r(38),r(7),r(5),r(16),r(55),r(305),r(1)),c=r(302),l=r(6);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=h.reduce((function(t,e){return t["offset"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),w=h.reduce((function(t,e){return t["order"+Object(l.w)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(w)};function k(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=O.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var n=r[t],o=k(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),O.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},315:function(t,e,r){"use strict";var n=r(3),o=r(1);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(n.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=c},318:function(t,e,r){"use strict";r(26),r(11),r(16);var n=r(3),o=(r(72),r(7),r(5),r(132),r(36),r(40),r(43)),c=r(84),l=r(131);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},351:function(t,e,r){t.exports=r.p+"img/acfb19d.svg"},602:function(t,e,r){var content=r(822);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("b5552f94",content,!0,{sourceMap:!1})},821:function(t,e,r){"use strict";var n=r(602);r.n(n).a},822:function(t,e,r){(e=r(24)(!1)).push([t.i,".flex[data-v-a7478922]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-a7478922]{background:#fff!important}.spiner-container[data-v-a7478922]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;width:100%;height:100vh}.page-title[data-v-a7478922]{font-size:16px;font-weight:900;line-height:19px;text-align:center;text-transform:uppercase;color:var(--primary)}.relative-col[data-v-a7478922]{position:relative}.img-fluid[data-v-a7478922]{display:block;margin:0 auto;width:375px;max-width:100%}[data-v-a7478922] .v-messages__message{color:#ff5252;font-size:12px;margin-left:5px}.hide-form[data-v-a7478922]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-a7478922]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}.change-status[data-v-a7478922]{margin-top:60px;font-size:18px;line-height:22px;text-align:center;color:var(--primary)}",""]),t.exports=e},911:function(t,e,r){"use strict";r.r(e);var n=r(110),o={name:"ChangePassword",components:{HeaderBar:r(293).a},data:function(){return{status:!0,loading:!1,showNewPass:String,showConfirmNewPass:String,isChanged:!1,snackbar:!1,token:"",form:{newPassword:"",confirmNewPassword:""},passwordRules:[function(t){return!!t||"Digite a senha"},function(t){return t&&t.length>=6||"A senha deve ter no mínimo 6 caractéres"}]}},computed:{confirmPasswordRules:function(){var t=this;return[function(t){return!!t||"Confirme a senha"},function(){return t.form.confirmNewPassword===t.form.newPassword||"As senhas devem ser idênticas."}]}},mounted:function(){var t=this;this.token=this.$route.params.token,n.a.changePasswordRequestValidate(this.token).catch((function(){setTimeout((function(){t.loading=!1,t.snackbar=!0}),500),t.goBack()}))},methods:{switchPassword:function(){var t=this;this.$refs.form.validate()?(this.animateForm(!0),n.a.changePassword(this.form,this.token).then((function(e){t.loading=!1,t.isChanged=!0,setTimeout((function(){t.gotoHome()}),1500)})).catch((function(e){setTimeout((function(){t.loading=!1,t.snackbar=!0}),500),console.error(e)}))):this.animateForm(!1)},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500)),document.querySelector("html").style.overflow="scroll"},goBack:function(){$nuxt._router.push("/login")}}},c=(r(821),r(35)),l=r(42),f=r.n(l),d=r(280),h=r(311),m=r(888),v=r(308),w=r(318),y=r(309),k=r(123),O=r(352),x=r(285),P=r(328),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"justify-center":""}},[t.loading?n("div",{staticClass:"spiner-container"},[n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:""}})],1):n("v-flex",{ref:"flex",attrs:{xs10:"",sm8:"",md6:""}},[n("v-container",[n("v-row",[n("v-col",{staticClass:"relative-col",attrs:{cols:"12"}},[n("HeaderBar",{attrs:{title:"Alterar Senha","back-page":!0}})],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("img",{staticClass:"img-fluid",attrs:{src:r(351)}})])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12"}},[t.isChanged?n("div",[n("p",{staticClass:"change-status"},[t._v("Senha alterada com sucesso!")])]):n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[n("v-text-field",{attrs:{color:"#60c",label:"Nova senha *",rules:t.passwordRules,type:t.showNewPass?"password":"text","append-icon":t.showNewPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showNewPass=!t.showNewPass}},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}}),t._v(" "),n("v-text-field",{attrs:{color:"#60c",label:"Confirmar nova senha *",rules:t.confirmPasswordRules,type:t.showConfirmNewPass?"password":"text","append-icon":t.showConfirmNewPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showConfirmNewPass=!t.showConfirmNewPass}},model:{value:t.form.confirmNewPassword,callback:function(e){t.$set(t.form,"confirmNewPassword",e)},expression:"form.confirmNewPassword"}}),t._v(" "),n("v-btn",{staticClass:"change-btn",attrs:{color:"#60c",dark:"",block:"",depressed:"",large:""},on:{click:t.switchPassword}},[t._v("Alterar Senha")])],1),t._v(" "),n("v-snackbar",[n("v-btn",{attrs:{color:"#FFF",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"a7478922",null);e.default=component.exports;f()(component,{VBtn:d.a,VCol:h.a,VContainer:m.a,VFlex:v.a,VForm:w.a,VLayout:y.a,VProgressCircular:k.a,VRow:O.a,VSnackbar:x.a,VTextField:P.a})}}]);