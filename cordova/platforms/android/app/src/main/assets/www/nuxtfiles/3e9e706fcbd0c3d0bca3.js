(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{307:function(t,e,n){"use strict";n(298);var r=n(301);e.a=Object(r.a)("flex")},308:function(t,e,n){"use strict";n(298);var r=n(301);e.a=Object(r.a)("layout")},312:function(t,e,n){"use strict";var r=n(3),o=n(1);var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(r.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=l},317:function(t,e,n){"use strict";n(26),n(11),n(16);var r=n(3),o=(n(71),n(7),n(5),n(132),n(37),n(40),n(43)),l=n(84),c=n(131);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},344:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},580:function(t,e,n){t.exports=n.p+"img/3c8a959.png"},595:function(t,e,n){var content=n(793);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("a0d77e38",content,!0,{sourceMap:!1})},596:function(t,e){},790:function(t,e,n){t.exports=n.p+"img/4fd7b31.svg"},791:function(t,e,n){"use strict";n(90)("sub",(function(t){return function(){return t(this,"sub","","")}}))},792:function(t,e,n){"use strict";var r=n(595);n.n(r).a},793:function(t,e,n){var r=n(24),o=n(344),l=n(580);e=r(!1);var c=o(l);e.push([t.i,".bg[data-v-34a64774]{width:100%;height:100%;position:fixed;background:url("+c+");background-size:cover;background-position:50%}[data-v-34a64774] .v-dialog{background-color:#fff;text-align:center}.v-card__title[data-v-34a64774]{-webkit-box-pack:center;justify-content:center}.v-form[data-v-34a64774]{width:100%}.container-spinner[data-v-34a64774],.flex[data-v-34a64774]{z-index:2}.flex[data-v-34a64774]{-webkit-animation:intro .3s backwards;animation:intro .3s backwards;-webkit-animation-delay:.35s;animation-delay:.35s}.layout[data-v-34a64774]{background:#60c!important}.bg-symbol[data-v-34a64774]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.bg-symbol img[data-v-34a64774]{width:40%}.hide-form[data-v-34a64774]{-webkit-animation:down .3s forwards;animation:down .3s forwards}.error-form[data-v-34a64774]{-webkit-animation:nono .3s,intro paused;animation:nono .3s,intro paused}.theme--light.v-text-field>.v-input__control>.v-input__slot[data-v-34a64774]:before{border-color:#c58aff}.theme--light.v-input:not(.v-input--is-disabled) input[data-v-34a64774],.theme--light.v-input:not(.v-input--is-disabled) textarea[data-v-34a64774],.theme--light.v-label[data-v-34a64774]{color:#c58aff}[data-v-34a64774] .v-card__title+.v-card__text{text-align:center}[data-v-34a64774] .v-input input{color:#fff!important}[data-v-34a64774] .v-label{font-weight:500!important;color:hsla(0,0%,100%,.7)!important}.v-text-field[data-v-34a64774]{border-color:hsla(0,0%,100%,.7)!important}[data-v-34a64774] input:-webkit-autofill{-webkit-transition:background-color 9999s ease-in-out 0s;transition:background-color 9999s ease-in-out 0s;-webkit-text-fill-color:#fff!important}",""]),t.exports=e},794:function(t,e,n){"use strict";var r=n(596),o=n.n(r);e.default=o.a},902:function(t,e,n){"use strict";n.r(e);n(791),n(19),n(20),n(5),n(12),n(33);var r=n(4),o=n(110),l={data:function(){return{status:!0,loading:!0,dialog:!1,dialogMessage:"",showPass:!1,title:"Entrar",email:"",emailRules:[function(t){return!!t||"Digite o e-mail"},function(t){return/.+@.+\..+/.test(t)||"E-mail inválido"}],password:"",passwordRules:[function(t){return!!t||"Digite a senha"},function(t){return t&&t.length>=6||"A senha deve ter no mínimo 6 caracteres"}]}},mounted:function(){this.loginSocialReturn()},methods:{submit:function(){var t=this;event.preventDefault(),this.$refs.form.validate()?(this.animateForm(!0),o.a.login(this.email,this.password).then((function(){$nuxt._router.push("/loading/login")})).catch((function(e){setTimeout((function(){t.dialogMessage="Usuário ou senha incorretos!",t.dialog=!0,t.loading=!1}),500),console.error(e)}))):this.animateForm(!1)},head:function(){return{title:this.title}},animateForm:function(t){var e=this;t?(this.$refs.flex.classList.add("hide-form"),document.querySelector("html").style.overflow="hidden",setTimeout((function(){e.loading=!0}),300)):(this.$refs.flex.classList.add("error-form"),setTimeout((function(){e.$refs.flex.classList.remove("error-form")}),500))},loginSocialReturn:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$auth.loggedIn){e.next=3;break}return t.loading=!1,e.abrupt("return");case 3:if(n=t.$auth.strategy.name,e.prev=4,"facebook"!==n){e.next=11;break}return r=t.getFacebookCredentials(),e.next=9,o.a.loginFacebook(r);case 9:e.next=15;break;case 11:if("google"!==n){e.next=15;break}return l=t.getGoogleCredentials(),e.next=15,o.a.loginGoogle(l);case 15:$nuxt._router.push("/loading/login"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),setTimeout((function(){t.dialogMessage="Falha ao realizar login utilizando "+n+".",t.dialog=!0,t.loading=!1}),500),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,18]])})))()},loginSocial:function(t){this.loading=!0,this.$auth.loginWith(t)},getFacebookCredentials:function(){return{id:this.$store.state.auth.user.id,email:this.$store.state.auth.user.email,name:this.$store.state.auth.user.name,birthday:this.$store.state.auth.user.birthday}},getGoogleCredentials:function(){return{email:this.$store.state.auth.user.email,email_verified:this.$store.state.auth.user.email_verified.toString(),family_name:this.$store.state.auth.user.family_name,given_name:this.$store.state.auth.user.given_name,locale:this.$store.state.auth.user.locale,name:this.$store.state.auth.user.name,picture:this.$store.state.auth.user.picture,sub:this.$store.state.auth.user.sub}}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"Entre no aplicativo da New School - Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro."}]}}},c=(n(792),n(35)),d=n(794),f=n(42),h=n.n(f),v=n(280),m=n(305),w=n(377),k=n(882),x=n(916),y=n(307),_=n(317),O=n(279),$=n(308),V=n(123),j=n(351),C=n(331),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("div",{staticClass:"bg"}),t._v(" "),t.loading?r("div",[r("div",{staticClass:"container-spinner"},[r("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#fff"}})],1)]):r("v-flex",{ref:"flex",attrs:{role:"main",xs10:"",sm8:"",md4:""}},[r("div",{staticClass:"bg-symbol"},[r("img",{attrs:{src:n(790),alt:"New Schoool logo"}})]),t._v(" "),r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}}),t._v(" "),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{dark:"",color:"#fff",rules:t.emailRules,label:"Email","data-vv-name":"email",required:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{dark:"",color:"#fff",rules:t.passwordRules,label:"Senha","data-vv-name":"password",type:t.showPass?"text":"password","append-icon":t.showPass?"mdi-eye-off":"mdi-eye",required:""},on:{"click:append":function(){return t.showPass=!t.showPass},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit()}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"btn-block btn-primary btn-white",on:{click:t.submit}},[t._v("\n              Entrar\n            ")])],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{staticClass:"btn-block btn-transparent",attrs:{to:"/cadastro"}},[t._v("\n            Cadastrar\n          ")])],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.loginSocial("facebook")}}},[r("v-icon",{attrs:{dark:"",left:""}},[t._v("mdi-facebook")]),t._v("Entrar com Facebook\n          ")],1)],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.loginSocial("google")}}},[r("v-icon",{attrs:{dark:"",left:""}},[t._v("mdi-google")]),t._v("Entrar com Google\n          ")],1)],1),t._v(" "),r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("v-btn",{attrs:{text:"",small:"",color:"#fff",to:"/esqueci-minha-senha"}},[t._v("Esqueceu sua senha?")])],1)],1)],1)],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card-title",{staticClass:"headline"},[t._v("Ops!")]),t._v(" "),r("v-card-text",[t._v(t._s(t.dialogMessage))]),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Ok")])],1)],1)}),[],!1,null,"34a64774",null);"function"==typeof d.default&&Object(d.default)(component);e.default=component.exports;h()(component,{VBtn:v.a,VCardText:m.b,VCardTitle:m.c,VCol:w.a,VContainer:k.a,VDialog:x.a,VFlex:y.a,VForm:_.a,VIcon:O.a,VLayout:$.a,VProgressCircular:V.a,VRow:j.a,VTextField:C.a})}}]);