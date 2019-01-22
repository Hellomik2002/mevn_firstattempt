<template>
  <div id = "Vue">
    <h1> Latest Posts</h1>
    <!--Create-->
    <div class = "create-post">
      <label for="create_post"></label>
      <input id="create-post" type="text" v-model="text" placeholder="Create a post">
      <button @click="createPost">Post!</button>
    </div>
    
    <!--DELETE-->
    <hr>
    <h2>id1 here</h2>
    {{id1}}
    <hr>
    <p class = "error" v-if="error">{{error}}</p>
    <div class="post-container">
        <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        @click="deletePosts(post._id)">

        {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/
        ${post.createdAt.getFullYear()}`}}
        
        <p class="text">{{post.text}}</p>
        
        </div>
    </div>

    <!--<router-view> </router-view>--> 
    
  </div>
</template>

<script>
import PostService from "@/services/PostService.js"
export default {
  name: "PostComponent",
  data() {
    return {
      posts:[],
      error:'',
      text:'',
      id1:'',
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    }
    catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost(){
      await PostService.insertPost(this.text);
       this.posts = await PostService.getPosts()
       //this.id1 = ""
    },
    async deletePosts(id){
      this.id1 = id;
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts()
    }
  }
}
</script>


<style scoped>
div.container { 
  max-width: 800px; 
  margin: 0 auto;
}
р.error { 
  border : 1px solid #ff5b5f;
   background-color: #ffc5c1; 
   padding: 10px; 
   margin-bottom: 15px;
}    
div.post { 
  position: relative; 
  border : 1px solid  #5bd658; 
  background-color :  #bcffb8;
  padding:10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at { 
  position: absolute; 
  top: 0; 
  left: 0; 
  padding: 5px 15px 5px 15px; 
  background-color: darkgreen; 
  color: white; 
  font-size: 13px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
