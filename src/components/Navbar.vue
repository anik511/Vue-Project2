<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <!--  -->
        <router-link class="point" tag="b-navbar-brand" :to="{ path: '/' }">
          NavBar
        </router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
            <b-navbar-nav right>
              <router-link
                class="point"
                tag="b-nav-item"
                :to="{ path: '/login' }"
              >
                Login
              </router-link>
              <b-nav-item href="#">Register</b-nav-item>
              <b-nav-item href="#">{{ user }}</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "User",
    };
  },
};
</script>

<style>
.point {
  cursor: pointer;
}
</style>
