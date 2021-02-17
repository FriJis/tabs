<template>
    <section>
        <div class="h">Create new tab</div>
        <div class="apps">
            <div
                class="app btn bg-grey"
                v-for="(r, i) in $moduleRoutes"
                :key="i"
                @click="createNewTab(r.name)"
            >
                {{ r.name }}
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        createNewTab(nameTab) {
            this.$store.dispatch("tabs/add", { name: nameTab })
            // this.$router.push({
            //   name,
            //   params: {
            //     id
            //   }
            // })
        },
    },
};
</script>

<style lang="scss" scoped>
.h {
    padding: 100px 0px;
    text-align: center;
    font-size: 50px;
}
.apps {
    display: flex;
    justify-content: space-around;
    .app {
        line-height: 50px;
        width: 150px;
        border: 1px solid grey;
        border-radius: 10px;
        text-align: center;
    }
}
</style>
