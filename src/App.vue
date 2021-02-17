<template>
  <div id="app">
    <v-header></v-header>

    <main>
        <keep-alive>
          <router-view :key="$route.path" />
        </keep-alive>
    </main>
  </div>
</template>

<script>
import header from "./components/header";
export default {
  components: {
    "v-header": header
  },
  mounted() {
    this.$router.push("/");
  },
  methods: {}
};
</script>
