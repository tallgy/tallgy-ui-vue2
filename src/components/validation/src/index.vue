<template>
    <component :is="dragType" @dragEvent="dragEvent"></component>
</template>

<script>
import dragToEnd from "./dragToEnd";

export default {
    name: "TValidation",
    components: {
        dragToEnd
    },
    props: {
        dragType: {
            type: String,
            default: 'dragToEnd'
        }
    },
    methods: {
        dragEvent(flag) {
            this.$emit('dragEvent', flag)
        }
    }
}
</script>

<style scoped lang="scss" src="../../../style/validation/index.scss"></style>
