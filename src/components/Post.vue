<template>
  <div class="posts-container">
    <div class="post">
      <div class="post__user">
        <img class="user-picture" src="@/assets/demo.png" alt="" />
      </div>
      <div class="post__content">
        <div class="post__time">
          <time>3min.</time>
        </div>
        <h4 class="post__user-name">名前</h4>
        <p class="post__description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          saepe quo officiis veniam similique eius dolorem excepturi veritatis
          facilis, maiores tempore corrupti ducimus possimus dicta perspiciatis
          id dolores eum voluptates?
        </p>
        <img v-if="isImage" src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isImage: false,
    };
  },
};
</script>

<style lang="scss">
.posts-container {
  padding: 80px 20px 54px;
  overflow: scroll;
}
.my-page .posts-container {
  padding: 0 20px;
}
.post {
  margin-top: 15px;
  display: grid;
  grid-template-columns: 12% 10px 1fr;
  border-bottom: 1px solid rgba($color: #57585a, $alpha: 0.5);
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
    margin-top: 9px;
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
