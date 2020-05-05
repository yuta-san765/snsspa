<template>
  <footer class="footer">
    <font-awesome-icon
      @click="goToTimeline"
      icon="home"
      class="icon icon-home"
    ></font-awesome-icon>
    <font-awesome-icon
      @click="goToChat"
      icon="comment-dots"
      class="icon icon-comment"
    ></font-awesome-icon>
    <font-awesome-icon
      @click="goToUser"
      icon="user"
      class="icon icon-user"
    ></font-awesome-icon>
  </footer>
</template>

<script>
export default {
  methods: {
    goToTimeline() {
      this.$router.push({ name: 'posts' });
    },
    goToChat() {
      this.$router.push({ name: 'chat' });
    },
    goToUser() {
      this.$router.push({ name: 'my-page' });
    },
  },
};
</script>

<style lang="scss">
.footer {
  z-index: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 54px;
  background-color: white;
  border-top: 1px solid #c9c9c9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .icon-home {
    font-size: 24px;
  }
  .icon-comment {
    font-size: 24px;
  }
  .icon-user {
    font-size: 24px;
  }
}
</style>
