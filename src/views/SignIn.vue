<template>
  <div class="sign-in">
    <Popup @close="close">
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
    </Popup>
  </div>
</template>

<script>
import {required, email, minLength, alphaNum} from 'vuelidate/lib/validators'
import Popup from '@/components/Popup'
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
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        alphaNum,
        minLength: minLength(8)
      }
    }
  },
  components: {
    Popup,
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
</style>
