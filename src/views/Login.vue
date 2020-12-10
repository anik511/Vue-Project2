<template>
  <b-row cols-md="2">
    <b-col>
      <b-form @submit.prevent="logIn">
        <b-form-group label="Name">
          <b-form-input
            v-model="name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password">
          <b-form-input
            type="password"
            v-model="password"
            placeholder="Password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import userdata from "../userdata";
export default {
  data() {
    return {
      name: null,
      password: null,
    };
  },
  methods: {
    logIn() {
      var user = userdata.find(
        (user) => user.name == this.name && user.password == this.password
      );
      if (this.name != null && this.password != null && user != undefined) {
        this.$store.dispatch("loginInfo", true);
        console.log(user);
        this.name = null;
        this.password = null;
        this.$router.push({ path: "/" });
      } else {
        console.log("user Undefined");
        this.name = null;
        this.password = null;
      }
    },
  },
};
</script>

<style></style>
