<template>
    <div>
        <dragToEnd style="width: 300px;"></dragToEnd>
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

    }
}
</script>

<style scoped lang="scss" src="../../../style/validation/index.scss"></style>
