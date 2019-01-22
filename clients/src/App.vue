<template>
    <div id="have">
        <router-view> </router-view> 
        
      <!--<PostComponent/>-->
    </div>
    
</template>

<script>
import PostComponent from '@/views/PostComponents'
export default {
  name: 'app',
  components:{
    PostComponent
  },
};
</script>

<style scoped>
  
</style>