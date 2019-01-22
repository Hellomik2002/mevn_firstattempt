import Vue from "vue";
import Router from "vue-router";
import main_vue from "@/views/PostComponents.vue" 
import second_vue from "@/views/pop.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/op",
      component:main_vue, 
      children:[
        {
          path:'beka',
          component:second_vue,
        },
      ]
      //props:{name: "ok"}
    },/*path:"/eiuwaieu?oods" */
    
  ]
});
