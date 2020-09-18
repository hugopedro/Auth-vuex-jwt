<template>
  <div class="container">
    <header class="jumbotron">
      <h1>{{user.username}}</h1>
      <h3>{{user.id}}</h3>
      <h3>{{user.email}}</h3>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'User',
  data() {
    return {
      user: ''
    };
  },
  mounted() {
    UserService.getUserBoard().then(
      response => {
        this.user = response.data;
      },
      error => {
        this.user =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>