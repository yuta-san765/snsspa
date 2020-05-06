<template>
  <div class="sign-up">
    <TheHeader>ユーザー登録</TheHeader>
    <div class="sign-up-form">
      <form>
        <label for="upload-picture" class="input-label"
          >プロフィール写真(必須ではありません)</label
        >
        <input id="upload-picture" class="upload-picture" type="file" />
        <label for="upload-picture" class="bg-camera">
          <font-awesome-icon
            icon="camera"
            class="icon-camera"
          ></font-awesome-icon>
        </label>
        <BaseInput v-model="sign_up_user_params.name" label="名前(必須)" placeholder="ぎーく太郎" type="text"></BaseInput>
        <BaseInput v-model="sign_up_user_params.email" label="メールアドレス" placeholder="geek@sns.com" type="email"></BaseInput>
        <BaseInput v-model="sign_up_user_params.password" label="パスワード" placeholder="8文字以上" type="password"></BaseInput>
        <BaseInput v-model="sign_up_user_params.password_confirmation" label="パスワード(確認)" placeholder="8文字以上" type="password"></BaseInput>
        <BaseButton @click.prevent="register" buttonClass="-fill-green sign-up">登録</BaseButton>
      </form>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
export default {
  data() {
    return {
      sign_up_user_params: {
        name: '',
        bio: 'default',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  components: {
    TheHeader,
    BaseInput,
    BaseButton
  },
  methods: {
    register() {
      this.$store.dispatch('register', this.sign_up_user_params).then(this.$router.push({name: 'posts'}))
    }
  }
};
</script>

<style lang="scss">
.upload-picture {
  display: none;
}
.bg-camera {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  background-color: rgba($color: #000000, $alpha: 0.3);
  position: relative;
}
.icon-camera {
  color: white;
  opacity: 0.6;
  font-size: 26px;
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
}
.input-label {
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
}
.sign-up-form {
  padding: 160px 20px 0;
}
</style>
