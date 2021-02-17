<template>
    <div class="tabs">
        <div class="tabs__inner">
            <div v-for="(t, i) in tabs" :key="i">
                <router-link
                    :to="{ name: t.name, params: { id: t.id } }"
                    class="tab"
                >
                    <div class="title">{{ t.name }}</div>
                    <div class="close btn bg-grey" @click="deleteTab(t.id)">
                        X
                    </div>
                </router-link>
            </div>
        </div>
        <div class="btn add bg-grey">
            +
            <div class="menu">
                <div
                    class="option"
                    v-for="(r, i) in options"
                    :key="i"
                    @click="createNewTab(r.name)"
                >
                    {{ r.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            options: [],
        };
    },
    computed: {
        ...mapGetters({
            tabs: "tabs/tabs",
        }),
    },
    beforeMount() {
        this.initOption();
    },
    methods: {
        initOption() {
            const {
                options: { routes },
            } = this.$router;
            this.options = routes;
        },
        createNewTab(name) {
            this.$store.dispatch("tabs/add", { name });
        },
        deleteTab(id) {
            this.$store.dispatch("tabs/delete", id);
        },
    },
};
</script>

<style lang="scss" scoped>
.tabs {
    $close-size: 30px;
    $new_tab: 40px;
    $border-radius: 10px;
    display: flex;
    .tabs__inner {
        display: flex;
        width: calc(100% - #{$new_tab});
        .tab {
            flex: 1;
            max-width: 200px;
            display: flex;
            line-height: $close-size;
            padding: 5px;
            border-radius: $border-radius $border-radius 0 0;
            .title {
                width: calc(100% - #{$close-size});
                padding: 0 10px;
                box-sizing: border-box;
                overflow: hidden;
            }
            .close {
                width: $close-size;
                text-align: center;
                border-radius: $close-size;
            }

            &.router-link-active {
                background: var(--bg-color);
            }
        }
    }
    .add {
        width: $new_tab;
        line-height: $new_tab;
        text-align: center;
    }
}
</style>