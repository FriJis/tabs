<template>
  <section>
    <div class="header">

      <v-navigator></v-navigator>
    </div>
    <div class="main">
      <div class="nav">
hjgj
      </div>
      <div class="section">
jhgjhgksdjfgs
      </div>
    </div>
  </section>
</template>

<script>
import navigator from "./components/navigator";
export default {
    components: {
        "v-navigator": navigator,
    },
    data() {
        return {
            v: 0,
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    min-height: 100px;
}
.main {
  
    .nav {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 300px;
    }
    .section {
        margin-left: 300px;
    }
}
</style>