(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{313:function(t,e,o){"use strict";var n=o(4),r=o(1);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(n.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(n.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=c},341:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IiNFMEU3RUMiLz4KPHBhdGggZD0iTTE1Ljg5MjggMTYuMjAyNUMxNy41MzQgMTYuMjAyNSAxOC44NjMzIDE0Ljg3MzIgMTguODYzMyAxMy4yMzIxQzE4Ljg2MzMgMTEuNTkwOSAxNy41MzQgMTAuMjYxNiAxNS44OTI4IDEwLjI2MTZDMTQuMjUxNyAxMC4yNjE2IDEyLjkyMjQgMTEuNTkwOSAxMi45MjI0IDEzLjIzMjFDMTIuOTIyNCAxNC44NzMyIDE0LjI1MTcgMTYuMjAyNSAxNS44OTI4IDE2LjIwMjVaTTE1Ljg5MjggMTcuNjg3OEMxMy45MSAxNy42ODc4IDkuOTUxOSAxOC42ODI5IDkuOTUxOSAyMC42NTgyVjIyLjE0MzVIMjEuODMzOFYyMC42NTgyQzIxLjgzMzggMTguNjgyOSAxNy44NzU2IDE3LjY4NzggMTUuODkyOCAxNy42ODc4WiIgZmlsbD0iIzYyNkQ3NCIvPgo8L3N2Zz4K"},369:function(t,e,o){var content=o(552);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("ceeceef2",content,!0,{sourceMap:!1})},550:function(t,e,o){t.exports=o.p+"img/ae2d148.svg"},551:function(t,e,o){"use strict";var n=o(369);o.n(n).a},552:function(t,e,o){(e=o(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),e.push([t.i,"*[data-v-6b311e66]{font-family:Roboto,sans-serif}.footer-card[data-v-6b311e66]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:end;align-items:flex-end}.v-responsive.v-image[data-v-6b311e66]{padding-top:45%;height:150px;position:relative;width:100%;border-radius:5px}.v-card-body[data-v-6b311e66]{margin-bottom:20px}.v-card__title[data-v-6b311e66]{font-weight:700;font-size:.75rem;padding:8px 0 0;line-height:16px;color:#1a1a1a}.theme--light.v-card .v-card__subtitle[data-v-6b311e66]{padding:0;color:#1a1a1a;font-weight:400;font-size:10px;line-height:11.72px}",""]),t.exports=e},613:function(t,e,o){var content=o(837);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("6becda18",content,!0,{sourceMap:!1})},657:function(t,e,o){"use strict";o(8);var n=o(3),r=(o(381),{name:"CourseCard",props:{course:{type:Object,required:!0}},computed:{user:function(){return this.$store.state.user}},methods:{openCourse:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.commit("courses/setCurrent",t.course);case 2:"ADMIN"==t.user.data.role?$nuxt._router.push("/admin/curso/".concat(t.course.slug)):$nuxt._router.push("/aluno/curso/".concat(t.course.slug));case 3:case"end":return e.stop()}}),e)})))()}}}),c=(o(551),o(39)),l=o(43),d=o.n(l),M=o(326),m=o(315),v=o(527),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"v-card-body",attrs:{elevation:"0",color:"transparent"},on:{click:function(e){return t.openCourse()}}},[o("v-img",{attrs:{src:t.course.capa.url}}),t._v(" "),o("div",{staticClass:"media-and-footer-container"},[o("v-card-title",[t._v(t._s(t.course.title))]),t._v(" "),o("div",{staticClass:"footer-card"},[o("v-card-subtitle",{staticClass:"mt-0"},[t._v(t._s(t.course.authorName))])],1)],1)],1)}),[],!1,null,"6b311e66",null);e.a=component.exports;d()(component,{VCard:M.a,VCardSubtitle:m.b,VCardTitle:m.d,VImg:v.a})},833:function(t,e,o){var map={"./bell-home-active.svg":834,"./bell-home.svg":835};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=833},834:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7Ij48cGF0aCBkPSJNMTggMTZ2LTVjMC0zLjA3LTEuNjQtNS42NC00LjUtNi4zMlY0YzAtLjgzLS42OC0xLjUtMS41MS0xLjVTMTAuNSAzLjE3IDEwLjUgNHYuNjhDNy42MyA1LjM2IDYgNy45MiA2IDExdjVsLTEuMyAxLjI5Yy0uNjMuNjMtLjE5IDEuNzEuNyAxLjcxaDEzLjE3Yy44OSAwIDEuMzQtMS4wOC43MS0xLjcxTDE4IDE2em0tNi4wMSA2YzEuMSAwIDItLjkgMi0yaC00YTIgMiAwIDAgMCAyIDJ6TTYuNzcgNC43M2MuNDItLjM4LjQzLTEuMDMuMDMtMS40M2ExIDEgMCAwIDAtMS4zOS0uMDJhMTAuNDI0IDEwLjQyNCAwIDAgMC0zLjI3IDYuMDZjLS4wOS42MS4zOCAxLjE2IDEgMS4xNmMuNDggMCAuOS0uMzUuOTgtLjgzYTguNDQgOC40NCAwIDAgMSAyLjY1LTQuOTR6TTE4LjYgMy4yOGMtLjQtLjM3LTEuMDItLjM2LTEuNC4wMmMtLjQuNC0uMzggMS4wNC4wMyAxLjQyYzEuMzggMS4yNyAyLjM1IDMgMi42NSA0Ljk0Yy4wNy40OC40OS44My45OC44M2MuNjEgMCAxLjA5LS41NS45OS0xLjE2Yy0uMzgtMi4zNy0xLjU1LTQuNDgtMy4yNS02LjA1eiIgZmlsbD0icmdiKDEwNCwwLDIwMSkiLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9InJnYmEoMCwgMCwgMCwgMCkiIC8+PC9zdmc+"},835:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7Ij48cGF0aCBkPSJNMTIgMjJjMS4xIDAgMi0uOSAyLTJoLTRjMCAxLjEuOSAyIDIgMnptNi02di01YzAtMy4wNy0xLjYzLTUuNjQtNC41LTYuMzJWNGMwLS44My0uNjctMS41LTEuNS0xLjVzLTEuNS42Ny0xLjUgMS41di42OEM3LjY0IDUuMzYgNiA3LjkyIDYgMTF2NWwtMiAydjFoMTZ2LTFsLTItMnptLTIgMUg4di02YzAtMi40OCAxLjUxLTQuNSA0LTQuNXM0IDIuMDIgNCA0LjV2NnoiIGZpbGw9IiM2MjYyNjIiLz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9InJnYmEoMCwgMCwgMCwgMCkiIC8+PC9zdmc+"},836:function(t,e,o){"use strict";var n=o(613);o.n(n).a},837:function(t,e,o){(e=o(28)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),e.push([t.i,"*[data-v-7ac1a728]{font-family:Roboto,sans-serif}#main-col[data-v-7ac1a728]{padding:20px 24px 50px;max-width:700px}[data-v-7ac1a728] .row{width:100%;margin:0}.user__image[data-v-7ac1a728]{cursor:pointer}#title[data-v-7ac1a728]{color:var(--primary);line-height:16.4px;font-weight:900;font-size:.9rem;margin-bottom:16px}.header_img[data-v-7ac1a728]{width:24px;height:24px;margin-right:20px}#bell[data-v-7ac1a728]{color:#737373;width:22px;height:22px;margin-right:5px;margin-top:5px}[data-v-7ac1a728] .v-input input,[data-v-7ac1a728] .v-label{font-size:.87rem!important;font-weight:500;color:rgba(0,0,0,.25)!important;font-family:Montserrat,sans-serif}[data-v-7ac1a728] .v-input input{color:rgba(0,0,0,.5)!important}[data-v-7ac1a728] .v-input__slot{margin-bottom:0;margin-bottom:10px!important}[data-v-7ac1a728] fieldset{border-color:rgba(0,0,0,.1);border-radius:0}[data-v-7ac1a728] .v-text-field.v-text-field--enclosed{margin:16px 0 0!important}[data-v-7ac1a728] .v-text-field--outlined>.v-input__control>.v-input__slot{min-height:48px}[data-v-7ac1a728] .v-input:not(.v-input--is-focused)>.v-input__control>.v-input__slot>.v-text-field__slot>.v-label{line-height:12px}[data-v-7ac1a728] .v-text-field--enclosed .v-input__prepend-inner{margin-top:0;align-self:center}[data-v-7ac1a728] .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)>.v-input__control>.v-input__slot{padding:0 19px}[data-v-7ac1a728] .theme--light.v-icon{color:rgba(0,0,0,.9)}#header[data-v-7ac1a728]{height:auto;padding-bottom:20px;border-bottom:1px solid rgba(0,0,0,.05)}.welcome[data-v-7ac1a728]{padding-left:1rem;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}h1[data-v-7ac1a728]{font-weight:900;font-size:1.5rem;line-height:24px}.xp[data-v-7ac1a728]{font-size:1rem;-webkit-box-flex:center;flex:center}.welcome-title[data-v-7ac1a728],.xp[data-v-7ac1a728]{font-weight:900;color:#1a1a1a}.welcome-title[data-v-7ac1a728]{font-size:.87rem}.welcome-subtitle[data-v-7ac1a728]{line-height:10px;color:var(--primary);font-size:.75rem;font-weight:500;font-family:Montserrat,sans-serif;text-transform:uppercase}.article-container[data-v-7ac1a728]{display:-webkit-box;display:flex;max-width:100vw;padding:0 2em 56px 1.5em}.max-content[data-v-7ac1a728]{max-height:100vh;width:100%;box-sizing:border-box;margin:0 auto}.title-section[data-v-7ac1a728]{font-weight:900;font-size:.9rem;line-height:17px;color:var(--primary);padding:1.25em 0 .5em 1.6em;text-transform:uppercase}@media (min-width:992px){#page[data-v-7ac1a728]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}}",""]),t.exports=e},982:function(t,e,o){"use strict";o.r(e);o(145),o(14),o(35);var n=o(657),r=o(55),c={components:{CourseCard:n.a},data:function(){return{title:"Bem-vindo",loading:!0,filtro:"",notifications:"",userPoints:""}},computed:{courseList:function(){return this.$store.state.courses.all},user:function(){return this.$store.state.user.data},userName:function(){return this.user.name.split(" ")[0]},filteredList:function(){if(this.filtro){var t=new RegExp(this.filtro.trim(),"i");return this.courseList.filter((function(e){return t.test(e.title)}))}return this.courseList}},mounted:function(){this.$fire.analytics.setAnalyticsCollectionEnabled(!0),console.log(this.$fire.remoteConfig.getAll()),this.getAllCourses(),this.getNotifications(),this.getUserScore(),this.getMyCourses()},methods:{getAllCourses:function(){var t=this;r.a.getAll("/api/v2/course").then((function(e){var data=e.data;t.$store.commit("courses/setAll",data),t.loading=!1}))},getMyCourses:function(){var t=this;r.a.getAll("".concat("api/v2/course-taken/user/").concat(this.user.id)).then((function(e){var data=e.data;console.log("MYCOURSES: ",data),t.$store.commit("courses/setMy",data)}))},goTo:function(path){$nuxt._router.push("/aluno/".concat(path))},getNotifications:function(){var t=this;r.a.getAll("".concat("api/v1/notification","/user/").concat(this.user.id)).then((function(e){t.notifications=e.data}))},getUserScore:function(){var t=this;r.a.getAll("".concat("/api/v1/gamefication/ranking","/user/").concat(this.user.id,"?timeRange=YEAR")).then((function(e){var o=e.data.points;t.userPoints=o}))}}},l=(o(836),o(39)),d=o(43),M=o.n(d),m=o(554),v=o(366),f=o(129),x=o(294),y=o(334),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",[n("div",{staticClass:"container-spinner"},[n("v-progress-circular",{attrs:{size:70,width:5,indeterminate:"",color:"#6600cc"}})],1)]):n("div",{attrs:{id:"page"}},[n("v-col",{attrs:{id:"main-col"}},[n("v-row",{attrs:{justify:"end"}},[n("img",{staticClass:"header_img",attrs:{src:o(550)},on:{click:function(e){return t.goTo("ranking")}}}),t._v(" "),n("img",{staticClass:"header_img",attrs:{id:"bell",src:o(833)("./bell-home"+(t.notifications.length?"-active":"")+".svg")},on:{click:function(e){return t.goTo("notificacao")}}})]),t._v(" "),n("v-row",{attrs:{id:"header",align:"center"}},[n("v-avatar",{staticClass:"user__image",attrs:{size:"55"}},[t.user.photo?n("img",{attrs:{src:t.user.photo},on:{click:function(e){return t.goTo("perfil")}}}):n("img",{attrs:{src:o(341)},on:{click:function(e){return t.goTo("perfil")}}})]),t._v(" "),n("v-col",[n("h1",{staticClass:"welcome-title"},[t._v("\n          "+t._s("Salve, "+t.userName+"!")+"\n        ")]),t._v(" "),n("h1",{staticClass:"welcome-subtitle"},[t._v("Seja bem-vindo")])]),t._v(" "),n("h1",{staticClass:"xp"},[t._v(t._s(t.userPoints||0)+" NC")])],1),t._v(" "),n("v-text-field",{attrs:{label:"Encontre Cursos",outlined:"","prepend-inner-icon":"mdi-magnify",autocomplete:"off"},model:{value:t.filtro,callback:function(e){t.filtro=e},expression:"filtro"}}),t._v(" "),n("p",{attrs:{id:"title"}},[t._v("Cursos")]),t._v(" "),t._l(t.filteredList,(function(t){return n("course-card",{key:t.id,attrs:{course:t}})}))],2)],1)}),[],!1,null,"7ac1a728",null);e.default=component.exports;M()(component,{VAvatar:m.a,VCol:v.a,VProgressCircular:f.a,VRow:x.a,VTextField:y.a})}}]);