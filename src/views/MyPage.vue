<template>
  <div class="my-page">
    <div class="user-cover">
      <img class="cover-image" src="@/assets/cover.png" alt="" />
    </div>
    <div class="user-container">
      <div class="user-info">
        <div class="user-info__picture">
          <img class="user-picture" src="@/assets/demo.png" alt="" />
        </div>
        <div class="user-info__container">
          <h4 class="user-info__name">名前</h4>
        </div>
        <div class="user-info__tab">
          <div class="user-info__num">
            <span class="span-num">2000</span>
            <br />
            <span class="span-word">投稿</span>
          </div>
          <div class="user-info__num">
            <span class="span-num">2000</span>
            <br />
            <span class="span-word">フォロー</span>
          </div>
          <div class="user-info__num">
            <span class="span-num">2000</span>
            <br />
            <span class="span-word">フォロワー</span>
          </div>
          <div class="icon-cog">
            <font-awesome-icon class="icon" icon="cog"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="my-posts-container">
      <div
        v-for="(mypost, $myPostIndex) in my_posts"
        :key="$myPostIndex"
        class="my-post"
      >
        <div class="my-post__image-box">
          <img class="my-post__image" src="@/assets/demo.png" alt="" />
        </div>
        <div class="my-post__info">
          <div class="my-post__time">
            <time>{{ mypost.updated_at.slice(5, 10) }}</time>
          </div>
          <h5 class="my-post__name">{{ $store.state.user.name }}</h5>
          <p class="my-post__text">{{ mypost.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Post from '@/components/Post';
import { EventService } from '../services/EventService';
export default {
  data() {
    return {
      my_posts: [],
    };
  },
  components: {
    // Post,
  },
  methods: {
    // goToMyPosts() {
    //   this.$router.push({ name: 'my-posts' });
    // },
    // goToMyFollows() {
    //   this.$router.push({ name: 'my-follows' });
    // },
    // goToMyFollowers() {
    //   this.$router.push({ name: 'my-followers' });
    // },
  },
  created() {
    EventService.showUsersTimeline(this.$store.state.user.id, 1).then(
      ({ data }) => {
        console.log(data);
        this.my_posts = data;
      }
    );
  },
};
</script>

<style lang="scss">
.user-cover {
  padding-top: 80px;
}
.cover-image {
  width: 100%;
  height: 205px;
  object-fit: cover;
  border-bottom: 1px solid #c9c9c9;
}
.user-container {
  padding: 23px 0 54px;
  margin: 0 20px;
  border-bottom: 1px solid #57585a;
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
    cursor: pointer;
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
.my-posts-container {
  padding: 0px 20px 54px;
}
.my-post {
  display: grid;
  grid-template-columns: 40px 10px 1fr;
  padding: 20px 0;
  + .my-post {
    border-top: 1px solid rgba($color: #707070, $alpha: 0.5);
  }
  &__image-box {
  }
  &__image {
    grid-column: 1 / 2;
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  &__info {
    grid-column: 3 / 4;
  }
  &__time {
    text-align: right;
    font-size: 8px;
    font-weight: normal;
    color: #707070;
    opacity: 0.6;
  }
  &__name {
    margin: 0 0 5px;
    font-weight: normal;
    font-size: 11px;
  }
  &__text {
    margin: 0;
    font-size: 13px;
  }
}
</style>
