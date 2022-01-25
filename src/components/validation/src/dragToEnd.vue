<template>
    <div ref="drag-box" class="drag-box">
        <div ref="drag-content" class="drag-content" :class="[{'drag-back': dragBackAnime && !isDragState}]">
            <div class="drag-bg"></div>
            <div class="drag-arrow" @mousedown="mouseStart($event)" draggable="false">
                <!--            箭头-->
                <svg t="1642066659290" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2110" width="25" height="25"><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" fill="#ffffff" p-id="2111"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "dragToEnd",
    props: {
        // 滑动失败回退动画，默认为true
        dragBackAnime: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            endPosition: 0,    // 盒子宽度
            mouseStartPosition: 0,  // 鼠标按下的位置
            dragContentWidth: 0,    // 拖拽内容的宽度，依靠这个宽度和鼠标的差来进行移动

            isDragState: false, // 是否属于拖拽状态
            isDragOK: false,    // 是否拖拽成功
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.endPosition = this.$refs['drag-box'].offsetWidth
            this.dragContentWidth = this.$refs['drag-content'].offsetWidth
        },
        // 开始拖动
        mouseStart(e) {
            this.isDragState = true
            if (this.isDragOK) return

            this.mouseStartPosition = e.clientX

            document.addEventListener('mousemove', this.mouseMove)
            document.addEventListener('mouseup', this.mouseEnd)
        },
        // 鼠标移动
        mouseMove(e) {
            if (this.isDragOK) return

            // 获取位置，clickX - 起始位置
            const position = e.clientX - this.mouseStartPosition

            // 修改 content的宽度，这个宽度的修改则会引起拖动框的修改
            this.$refs["drag-content"].style.width = (position>=0 ? position : 0) + this.dragContentWidth + 'px'

            if (position >= this.endPosition) {
                // 拖拽以及超过了宽度，代表了拖拽的完成
                this.$refs['drag-content'].style.width = this.endPosition - this.dragContentWidth + 'px'
                this.isDragOK = true
            }
        },
        mouseEnd() {
            this.isDragState = false
            document.removeEventListener('mousemove', this.mouseMove)
            setTimeout(() => {
                document.removeEventListener('mouseup', this.mouseEnd)
            }, 10)

            this.validationMethod()
        },
        validationMethod() {
            if (this.isDragOK) {
                // 提交一个事件，成功带true，失败带false
                this.$emit('dragEvent', true)
                return
            }

            this.$emit('dragEvent', false)
            this.$refs['drag-content'].style.width = this.dragContentWidth + 'px'
        }
    }
}
</script>

<style scoped lang="scss" src="../../../style/validation/dragToEnd.scss"></style>
