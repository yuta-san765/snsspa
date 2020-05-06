<template>
  <div class="sign-in">
    <div class="popup">
      <div class="icon-wrapper">
        <font-awesome-icon
          @click="close"
          icon="times"
          class="icon-times"
        ></font-awesome-icon>
      </div>
      <form>
        <BaseInput
          v-model="user.email"
          label="メールアドレス"
          type="text"
          placeholder="geek@sns.com"
        ></BaseInput>
        <BaseInput
          v-model="user.password"
          label="パスワード"
          type="email"
          placeholder="8文字以上"
        ></BaseInput>
        <BaseButton @click.prevent="signIn" buttonClass="-fill-green sign-in">ログイン</BaseButton>
      </form>
      <p class="pass-retreive">パスワードを忘れた場合は<span>こちら</span></p>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput';
import BaseButton from '@/components/BaseButton';
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  components: {
    BaseInput,
    BaseButton,
  },
  methods: {
    close() {
      this.$router.push({ name: 'Top' });
    },
    signIn() {
      this.$store.dispatch('signIn', this.user).then(this.$router.push({name: 'posts'}))
    }
  },
};
</script>

<style lang="scss">
.pass-retreive {
  font-size: 13px;
  margin: 12px auto 12px;
  span {
    text-decoration: underline;
    margin-left: 10px;
  }
}
.popup {
  padding: 20px 20px 5px;
  background-color: white;
  border-radius: 15px;
  border: 1px solid #707070;
  form {
    text-align: left;
  }
}
.icon-wrapper {
  display: flex;
  margin: 5px auto 17px 10px;
}
.icon-times {
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  color: #707070;
}
</style>
