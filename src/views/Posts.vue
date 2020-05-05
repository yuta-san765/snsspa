<template>
  <Post></Post>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
  components: {
    Post
  },
  data() {
    return {
      isImage: false,
    };
  },
};
</script>

<style lang="scss">
</style>
