<template>
  <div class="posts-container">
    <Post
      v-for="(post, $postIndex) in posts"
      :key="$postIndex"
      :post="post"
    ></Post>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import { EventService } from '../services/EventService';
export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: [],
      isImage: false,
    };
  },
  created() {
    EventService.getPosts(1).then(({ data }) => {
      console.log(data)
      this.posts = data;
    });
  },
};
</script>

<style lang="scss">
.posts-container {
  padding: 80px 20px 54px;
  overflow: scroll;
}
</style>
