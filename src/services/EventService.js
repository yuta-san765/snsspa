import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://teachapi.herokuapp.com`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
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
    return apiClient.put(
      `/users/${id}`,
      { user_params: user_params },
      {
        headers: {
          Authorization: 'Bearer ' + 'token from vuex',
        },
      }
    );
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`, {
      headers: {
        Authorization: 'Bearer ' + 'token from vuex',
      },
    });
  },
  showUsersTimeline(id, pageNum) {
    return apiClient.get(`/users/${id}/timeline?page=${pageNum}`, {
      headers: {
        Authorization: 'Bearer ' + 'token from vuex',
      },
    });
  },
  post(text) {
    return apiClient.post(
      'posts',
      { post_params: { text: text } },
      {
        headers: {
          Authorization: 'Bearer ' + 'token from vuex',
        },
      }
    );
  },
  editPost(id, text) {
    return apiClient.put(
      `posts/${id}`,
      { post_params: { text: text } },
      {
        headers: {
          Authorization: 'Bearer ' + 'token from vuex',
        },
      }
    );
  },
  deletePost(id) {
    return apiClient.delete(`/posts/${id}`)
  },
  follow(id) {
    return apiClient.post(`/users/${id}/follow`)
  },
  unFollow(id) {
    return apiClient.delete(`/users/${id}/follow`)
  },
  showFollowings(id) {
    return apiClient.get(`/users/${id}/followings`)
  },
  showFollowers(id) {
    return apiClient.get(`/users/${id}/followers`)
  },
  showChatrooms(pageNum) {
    return apiClient.get(`/chatrooms?page=${pageNum}`, {headers: {
      Authorization: 'Bearer ' + 'token from vuex'
    }})
  },
  joinChatroom(id) {
    return apiClient.post(`/chatrooms/${id}/join`, {headers: {
      Authorization: 'Bearer ' + 'token from vuex'
    }})
  },
  createChatroom(name) {
    return apiClient.post('/chatrooms', {chatroom_params: {
      name: name
    }},
    {headers: {
      Authorization: 'Bearer ' + 'token from vuex'
    }})
  },
  showChatMessages(id) {
    //ここのクエリパラメータの指示が不明
    return apiClient.get(`/chatrooms/${id}/messages`, {
      headers: {
        Authorization: 'Bearer ' + 'token from vuex'
      }
    })
  },
  sendChatMessage(id, text) {
    return apiClient.post(`/chatrooms/${id}/messages`,  {
      message_params: {
        text: text
      }
    },
    {
      headers: {
        Authorization: 'Bearer ' + 'token from vuex'
      }
    })
  }
};
