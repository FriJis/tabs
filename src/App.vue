<template>
    <div id="app">
        <v-header></v-header>

        <main>
            <nav></nav>
            <section>
                <keep-alive>
                    <router-view :key="$route.path" />
                </keep-alive>
            </section>
        </main>
    </div>
</template>

<script>
import header from "./components/header";
export default {
    components: {
        "v-header": header,
    },
    mounted() {
        this.$router.push('/')
    },
    methods: {},
};
</script>
