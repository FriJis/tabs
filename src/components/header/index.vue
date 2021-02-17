<template>
    <header>
        <v-tabs />
    </header>
</template>

<script>
import tabs from "./modules/tabs";
export default {
    components: {
        "v-tabs": tabs,
    },
};
</script>

<style lang="scss" scoped>
header {
    box-shadow: inset 0px -7px 5px -8px black;
}
</style>