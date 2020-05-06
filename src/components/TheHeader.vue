<template>
  <header class="header">
    <div v-if="left" class="header__left">
      <font-awesome-icon
        @click="back"
        class="icon icon-left"
        icon="angle-left"
      ></font-awesome-icon>
    </div>
    <div class="header__center">
      <h3 class="header__title">
        <slot></slot>
      </h3>
    </div>
    <div v-if="right" class="header__right">
      <font-awesome-icon
        @click="showPostEditer"
        class="icon icon-pen"
        icon="pen"
      ></font-awesome-icon>
    </div>
    <div v-if="isPopup" class="edit-bg" @click.self="close">
      <Popup @close="close">
        <p class="popup-text" v-if="$route.params.name === 'chatroom'">
          Chatroomにメッセージを残します。
        </p>
        <p class="popup-text" v-else>Timelineに投稿します。</p>
        <form>
          <textarea class="popup-textarea" v-model="text"></textarea>
          <BaseButton @click.prevent="makePost" buttonClass="-fill-green popup"
            >投稿</BaseButton
          >
        </form>
      </Popup>
    </div>
  </header>
</template>

<script>
import Popup from '@/components/Popup';
import BaseButton from '@/components/BaseButton';
import { EventService } from '../services/EventService';
export default {
  data() {
    return {
      isPopup: false,
      text: '',
    };
  },
  components: {
    Popup,
    BaseButton,
  },
  props: {
    left: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    close() {
      this.isPopup = false;
    },
    showPostEditer() {
      this.isPopup = true;
    },
    makePost() {
      if (this.$route.params.name === 'chatroom') {
        this.isPopup = false;
        this.text = '';
      } else {
        EventService.post(this.text).then((response) => {
          console.log(response);
          this.isPopup = false;
          this.text = '';
          this.$router.go({path: this.$router.currentRoute.path, force: true})
        });
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #212121;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  &__center {
    display: flex;
    align-items: flex-end;
    grid-column: 2 / 3;
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
    grid-column: 1 / 2;
  }
  &__right {
    display: flex;
    align-items: flex-end;
    justify-content: right;
    grid-column: 3 / 4;
  }
}
.icon {
  color: #34aa22;
  cursor: pointer;
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
.edit-bg {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #707070, $alpha: 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-text {
  font-size: 15px;
}
.popup-textarea {
  width: calc(100% - 30px);
  max-width: 300px;
  height: 200px;
  padding: 15px;
  border-radius: 15px;
  &:focus {
    outline: 0;
    border: 1px solid white !important;
    box-shadow: 0 0 5px rgba($color: #34aa22, $alpha: 1);
  }
}
</style>
