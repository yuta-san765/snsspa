<template>
  <div class="post">
    <div class="post__user">
      <img class="user-picture" src="@/assets/demo.png" alt="" />
    </div>
    <div class="post__content">
      <div class="post__time">
        <time>{{time}}</time>
      </div>
      <h4 class="post__user-name">{{post.user.name}}</h4>
      <p class="post__description">
        {{post.text}}
      </p>
      <img v-if="isImage" src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      isImage: false,
    };
  },
  computed: {
    time() {
      return this.post.updated_at.slice(5,10) +' ' + this.post.updated_at.slice(11, 16)
    }
  }
};
</script>

<style lang="scss">
// .my-page .posts-container {
//   padding: 0 20px;
// }
.post {
  margin-top: 15px;
  display: grid;
  grid-template-columns: 12% 10px 1fr;
  border-bottom: 0.5px solid rgba($color: #707070, $alpha: 0.5);
  &:last-child {
    border-bottom: none;
  }
  &__user {
    grid-column: 1 / 2;
  }
  &__content {
    grid-column: 3 / 4;
  }
  &__time {
    margin-top: 4px;
    font-size: 8px;
    color: #707070;
    opacity: 0.6;
    text-align: right;
  }
  &__user-name {
    margin: 0;
    font-size: 11px;
    font-weight: normal;
  }
  &__description {
    font-size: 13px;
    font-weight: 400;
  }
}
.user-picture {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
</style>
