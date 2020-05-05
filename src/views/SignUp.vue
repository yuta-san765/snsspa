<template>
  <div class="sign-up">
    <div class="header">
      <div class="header__left">
        <font-awesome-icon
          class="icon icon-left"
          icon="angle-left"
        ></font-awesome-icon>
      </div>
      <div class="header__center">
        <h3 class="header__title">ユーザー登録</h3>
      </div>
      <div class="header__right">
        <font-awesome-icon class="icon icon-pen" icon="pen"></font-awesome-icon>
      </div>
    </div>
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
        <BaseInput v-model="user.name" label="名前(必須)" placeholder="ぎーく太郎" type="text"></BaseInput>
        <BaseInput v-model="user.email" label="メールアドレス" placeholder="geek@sns.com" type="email"></BaseInput>
        <BaseInput v-model="user.password" label="パスワード" placeholder="8文字以上" type="password"></BaseInput>
        <BaseInput v-model="user.password_confirmation" label="パスワード(確認)" placeholder="8文字以上" type="password"></BaseInput>
        <BaseButton buttonClass="-fill-green sign-up">登録</BaseButton>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  components: {
    BaseInput,
    BaseButton
  }
};
</script>

<style lang="scss">
.header {
  height: 80px;
  background-color: #212121;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  &__center {
    display: flex;
    align-items: flex-end;
  }
  &__title {
    color: white;
    font-size: 15px;
    font-family: 'SF Pro Text';
    font-weight: 400;
    margin: 15px auto;
  }
  &__left {
    display: flex;
    align-items: flex-end;
  }
  &__right {
    display: flex;
    align-items: flex-end;
    justify-content: right;
  }
}
.icon {
  color: #34aa22;
}
.icon-left {
  font-size: 28px;
  margin-left: 20px;
  margin-bottom: 12px;
}
.icon-pen {
  font-size: 20px;
  margin-left: auto;
  margin-right: 21px;
  margin-bottom: 15px;
}
.sign-up-form {
  padding: 80px 20px 0;
}
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
  font-size: 24px;
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

</style>
