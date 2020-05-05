<template>
  <div class="top">
    <div class="top-image">
      <h1>GEEK</h1>
      <h2>エンジニアのためのSNS</h2>
    </div>
    <div class="top-invitation">
      <BaseButton @click="goToSignUp" buttonClass="-fill-green top">メールではじめる</BaseButton>
      <p>すでにアカウントをお持ちですか？<span @click="goToSignIn" class="show-sign-in">ログイン</span></p>
      <p>
        <span>利用規約</span
        >と<span>プライバシーポリシー</span>に同意したことになります。
      </p>
    </div>
    <div v-if="isSignInOpen" class="sign-in-bg" @click.self="close">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
export default {
  name: 'Top',
  data() {
    return {
    }
  },
  components: {
    BaseButton,
  },
  computed: {
    isSignInOpen() {
      return this.$route.name === 'sign-in'
    }
  },
  methods: {
    goToSignIn() {
      this.$router.push({name: 'sign-in'})
    },
    goToSignUp() {
      this.$router.push({name: 'sign-up'})
    },
    close() {
      this.$router.push({name: 'Top'})
    }
  }
};
</script>

<style lang="scss">
.top {
  height: 100%;
  text-align: center;
}
.top-image {
  background-image: url('../assets/main_image.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 80%;
  display: flex;
  flex-flow: column;
  color: white;
  h1 {
    margin: 205px auto 0;
    font-size: 82px;
  }
  h2 {
    font-size: 16px;
    font-weight: normal;
    margin: 0 auto;
  }
}
.top-invitation {
  padding: 20px;
  p {
    margin: 0;
    font-size: 12px;
  }
  p + p {
    margin-top: 9px;
  }
  span {
    font-weight: bold;
  }
}
.show-sign-in {
  margin-left: 10px;
  cursor: pointer;
}
.sign-in-bg {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #707070, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
