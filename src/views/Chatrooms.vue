<template>
  <div class="chatrooms">
    <BaseButton @click="isMakeChatroom = true" buttonClass="-fill-green chatroom"
      >チャットルームを作成する</BaseButton
    >
    <hr />
    <div v-if="isMakeChatroom" class="edit-bg" @click.self="cancel">
      <Popup @close="cancel">
        <form>
          <BaseInput v-model="name" label="部屋の名前:" type="text"></BaseInput>
          <BaseButton @click="makeChatroom" buttonClass="-fill-green popup"
            >作成</BaseButton
          >
        </form>
      </Popup>
    </div>
    <div
      v-for="(chatroom, $chatroomIndex) in chatrooms"
      :key="$chatroomIndex"
      class="chatroom"
      @click="log($event)"
    >
      <div>
        <img class="chatroom__image" src="@/assets/demo.png" alt="" />
      </div>
      <div class="chatroom__info">
        <h4 class="chatroom__name">部屋: {{ chatroom.name }}</h4>
        <time class="chatroom__time">{{
          chatroom.updated_at.slice(5, 10)
        }}</time>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput';
import BaseButton from '@/components/BaseButton';
import Popup from '@/components/Popup';
import { EventService } from '../services/EventService';
export default {
  data() {
    return {
      chatrooms: [],
      name: '',
      isMakeChatroom: false,
    };
  },
  components: {
    BaseInput,
    BaseButton,
    Popup,
  },
  created() {
    EventService.showChatrooms(1).then(({ data }) => {
      console.log(data);
      this.chatrooms = data;
    });
  },
  methods: {
    cancel() {
      this.isMakeChatroom = false;
    },
    makeChatroom() {
      EventService.createChatroom(this.name).then(({ data }) => {
        console.log(data);
      });
    },
    log(e) {
      console.log(e)
    }
  },
};
</script>

<style lang="scss">
.chatrooms {
  padding: 100px 0 54px;
  text-align: center;
}
.chatroom {
  padding:15px 20px 0;
  display: grid;
  grid-template-columns: 40px 10px 1fr;
  &__image {
    grid-column: 1 / 2;
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
  &__info {
    grid-column: 3 / 4;
    display: flex;
    justify-content: space-between;
  }
  &__name {
    font-size: 15px;
    font-weight: normal;
  }
  &__time {
    font-size: 10px;
    color: #707070;
    opacity: 0.5;
  }
  + .chatroom {
    border-top: 1px solid black;
  }
}
</style>
