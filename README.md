# tallgy-ui-vue2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 组件
## 滑动框

<dragToEnd style="width: 300px;" @dragEvent="ttt"></dragToEnd>
滑动之后会提交一个 dragEvent 事件， 通过判断 true 和 false 来判断滑动是否成功。
this.$emit('dragEvent', false)


dragBackAnime 滑动失败后回退的动画，默认为true

