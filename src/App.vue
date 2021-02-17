<template>
    <div id="app">
        <v-header></v-header>

        <main>
            <nav></nav>
            <section>
                <keep-alive>
                    <router-view :key="$route.params.id"/>
                </keep-alive>
            </section>
        </main>

        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
    </div>
</template>

<script>
import header from "./components/header";
export default {
    components: {
        "v-header": header,
    },
    mounted() {},
    methods: {},
};
</script>
