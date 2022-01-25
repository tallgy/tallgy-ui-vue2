<template>
    <div>
        <dragToEnd style="width: 300px;" @dragEvent="ttt"></dragToEnd>
    </div>
</template>

<script>
import dragToEnd from "./dragToEnd";

export default {
    name: "TValidation",
    components: {
        dragToEnd
    },
    props: {

    },
    methods: {
        ttt(flag) {
            console.log(flag)
        }
    }
}
</script>

<style scoped lang="scss" src="../../../style/validation/index.scss"></style>
