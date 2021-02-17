<template>
    <div class="navigator">
        <div class="buttons">
            <div class="btn bg-grey"><i class="fas fa-arrow-left"></i></div>
            <div class="btn bg-grey"><i class="fas fa-arrow-right"></i></div>
            <div class="btn bg-grey">i</div>
        </div>
        <div class="prov field">
            <div class="block">jh</div>
            <div class="btn bg-grey">
                <i class="fas fa-redo-alt"></i>
            </div>
        </div>
        <div class="search field">
            <div class="block"></div>
            <div class="btn bg-grey">
                <i class="fas fa-search"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$size: 40px;
$fieldHeight: $size - 10px;

@mixin btn($s) {
    border-radius: $s;
    text-align: center;
    width: $s;
    line-height: $s;
    display: block;
    i {
        display: block;
        line-height: $s;
    }
}

.navigator {
    display: flex;
    align-items: center;

    .buttons {
        display: flex;
        align-items: center;
        .btn {
            @include btn($size);
        }
    }
    .field {
        // box-sizing: border-box;
        height: $fieldHeight;
        line-height: $fieldHeight;
        display: flex;
        border-radius: 200px;
        border: 1px solid rgb(209, 209, 209);
        // padding: 0px 20px;

        .block {
            padding: 0 20px;
            width: calc(100% - #{$fieldHeight});
            box-sizing: border-box
        }
        .btn {
            @include btn($fieldHeight);
        }
        &.prov {
            flex: 3;
        }
        &.search {
            flex: 1;
        }
    }
}
</style>