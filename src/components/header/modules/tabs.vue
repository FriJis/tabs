<template>
    <div class="tabs">
        <div class="tabs__inner">
            <template v-for="(t) in tabs">
                <router-link
                    :key="t.id"
                    :to="{ name: t.name, params: { id: t.id } }"
                    class="tab"
                >
                    <div class="title">{{ t.name }}</div>
                    <div
                        class="close btn bg-grey"
                        @click.prevent="deleteTab(t.id)"
                    >
                        <i class="fas fa-times"></i>
                    </div>
                </router-link>
            </template>
        </div>
        <div class="btn add bg-grey">
            +
            <div class="menu">
                <div
                    class="option btn bg-grey"
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
            this.options = this.$moduleRoutes;
        },
        createNewTab(name) {
            this.$store.dispatch("tabs/add", { name });
        },
        deleteTab(id) {
            this.$store.dispatch("tabs/delete", id);
            this.$router.push("/");
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
        width: calc(100% - var(--tabs-height));
        .tab {
            flex: 1;
            max-width: 200px;
            display: flex;
            line-height: var(--tabs-height);
            border-radius: $border-radius $border-radius 0 0;
            color: var(--color);
            text-decoration: none;
            align-items: center;
            padding: 0 10px;
            overflow: hidden;

            .title {
                width: calc(100% - var(--tabs-close-btn-size));
                box-sizing: border-box;
                overflow: hidden;
                padding-right: 10px;
            }
            .close {
                width: var(--tabs-close-btn-size);
                line-height: var(--tabs-close-btn-size);
                i {
                    line-height: var(--tabs-close-btn-size);
                    display: block;
                }
                text-align: center;
                border-radius: var(--tabs-close-btn-size);
            }

            &.router-link-active {
                box-shadow: 0px 12px 9px -3px black;
                background: var(--bg-color);
            }
        }
    }
    .add {
        width: var(--tabs-height);
        line-height: var(--tabs-height);
        text-align: center;
        position: relative;
        i {
            line-height: var(--tabs-height);
        }
        &:hover .menu {
            visibility: visible;
            box-shadow: 0px 4px 5px 4px rgba(0, 0, 0, 0.27);
            border-radius: 0 0 0 10px;
            overflow: hidden;
        }
        .menu {
            background: var(--bg-color);
            position: absolute;
            top: 100%;
            right: 0px;
            visibility: hidden;
            z-index: 3;
            .option {
                padding: 0 20px;
            }
        }
    }
}
</style>