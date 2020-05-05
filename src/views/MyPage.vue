<template>
  <div class="my-page">
    <div class="user-cover">
      <img class="cover-image" src="@/assets/cover.png" alt="">
    </div>
    <div class="user-container">
      <div class="user-info">
        <div class="user-info__picture">
          <img class="user-picture" src="@/assets/demo.png" alt="">
        </div>
        <div class="user-info__container">
          <h4 class="user-info__name">名前</h4>
        </div>
          <div class="user-info__tab">
            <div class="user-info__num">
              <span class="span-num">2000</span>
              <br>
              <span class="span-word">投稿</span>
            </div>
            <div class="user-info__num">
              <span class="span-num">2000</span>
              <br>
              <span class="span-word">フォロー</span>
            </div>
            <div class="user-info__num">
              <span class="span-num">2000</span>
              <br>
              <span class="span-word">フォロワー</span>
            </div>
            <div class="icon-cog">
              <font-awesome-icon class="icon" icon="cog"></font-awesome-icon>
            </div>
          </div>
      </div>
    </div>
    <Post></Post>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
  components: {
    Post
  }
}
</script>

<style lang="scss">
.user-cover {
  padding-top: 80px;
}
.cover-image {
  width: 100%;
  height: 205px;
  object-fit: cover;
  border-bottom: 1px solid #C9C9C9;
}
.user-container {
  padding: 23px 0 54px;
  margin: 0 20px;
  border-bottom: 1px solid #57585A;
}
.user-info {
  height: 60px;
  display: grid;
  grid-template-columns: 50px 11px 1fr;
  grid-template-rows: 1fr 1fr;
  &__picture {
    grid-column: 1 / 2;
  }
  &__container {
    grid-column: 3 / 4;
  }
  &__name {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 22px;
  }
  &__tab {
    grid-row: 2 / 3;
    grid-column: 2 / 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &__num {
    text-align: center;
    font-weight: bold;
  }
}
.span-num {
  font-size: 16px;
}
.span-word {
  font-size: 11px;
}
.user-picture {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.icon-cog {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>