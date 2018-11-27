import Vue from "vue";
import Router from "vue-router";
import Hello from '@/views/Hello.vue'
import Posts from '@/views/Posts.vue'
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:"/",
      component:Hello,
      //props:{name: "ok"}
    }
    ,
    {
      path:"/posts",
      name: "Posts",
      component:  Posts 
  }
  ]
});
