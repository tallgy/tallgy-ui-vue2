import TValidation from './src/index'

TValidation.install = function (Vue) {
    Vue.component(TValidation.name, TValidation)
}

export default TValidation
