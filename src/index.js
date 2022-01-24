import TValidation from './components/validation'

const components = [
    TValidation,
]

/**
 * 这个方法的作用是 将所有的基本组件都进行导入
 *  当然我们可能会有只需要部分组件的情况，所以我们会将每个组件也进行导出。
 * @param Vue
 * @param opts
 */
const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default {
    version: '0.0.1',
    install,

    TValidation,
}
