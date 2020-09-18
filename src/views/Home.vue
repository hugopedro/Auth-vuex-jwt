<template>
  <div class="container">
    <header v-for="user in users" :key="user.id" class="jumbotron">
      <h3>{{user.username}}</h3>
      <h5>{{user.email}}</h5>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      users: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.users = response.data;
      },
      error => {
        this.users =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style>

.jumbotron {
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>