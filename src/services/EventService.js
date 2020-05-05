import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://teachapi.herokuapp.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// いちいちheaderにtokenを入れるのが大変なので、withTokenのapiClientを用意すべきだった。→やった
const apiClientWithToken = axios.create({
  baseURL: `https://teachapi.herokuapp.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + 'token from vuex',
  },
});

export default {
  signUp(sign_up_user_params) {
    return apiClient.post('/sign_up', {
      sign_up_user_params: sign_up_user_params,
    });
  },
  signIn(sign_in_user_params) {
    return apiClient.post('/sign_in', {
      sign_in_user_params: sign_in_user_params,
    });
  },
  getPosts(pageNum) {
    return apiClient.get(`/posts?page=${pageNum}`);
  },
  editUser(user_params, id) {
    return apiClientWithToken.put(`/users/${id}`, { user_params: user_params });
  },
  deleteUser(id) {
    return apiClientWithToken.delete(`/users/${id}`);
  },
  showUsersTimeline(id, pageNum) {
    return apiClientWithToken.get(`/users/${id}/timeline?page=${pageNum}`);
  },
  post(text) {
    return apiClientWithToken.post('posts', { post_params: { text: text } });
  },
  editPost(id, text) {
    return apiClientWithToken.put(`posts/${id}`, {
      post_params: { text: text },
    });
  },
  deletePost(id) {
    return apiClientWithToken.delete(`/posts/${id}`);
  },
  follow(id) {
    return apiClient.post(`/users/${id}/follow`);
  },
  unFollow(id) {
    return apiClient.delete(`/users/${id}/follow`);
  },
  showFollowings(id) {
    return apiClient.get(`/users/${id}/followings`);
  },
  showFollowers(id) {
    return apiClient.get(`/users/${id}/followers`);
  },
  showChatrooms(pageNum) {
    return apiClientWithToken.get(`/chatrooms?page=${pageNum}`);
  },
  joinChatroom(id) {
    return apiClientWithToken.post(`/chatrooms/${id}/join`);
  },
  createChatroom(name) {
    return apiClientWithToken.post('/chatrooms', {
      chatroom_params: {
        name: name,
      },
    });
  },
  showChatMessages(id) {
    //ここのクエリパラメータの指示が不明
    return apiClientWithToken.get(`/chatrooms/${id}/messages`);
  },
  sendChatMessage(id, text) {
    return apiClientWithToken.post(`/chatrooms/${id}/messages`, {
      message_params: {
        text: text,
      },
    });
  },
};
