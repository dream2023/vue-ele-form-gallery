# vue-ele-form-gallery | 使 element-ui upload 组件更简单、好用

[![license](https://img.shields.io/npm/l/vue-ele-form-gallery.svg)](https://dream2023.github.io/vue-ele-form-gallery/)
[![npm](https://img.shields.io/npm/v/vue-ele-form-gallery.svg)](https://www.npmjs.com/package/vue-ele-form-gallery)
[![download](https://img.shields.io/npm/dw/vue-ele-form-gallery.svg)](https://npmcharts.com/compare/vue-ele-form-gallery?minimal=true)

![image](https://raw.githubusercontent.com/dream2023/images/master/vue-ele-form-gallery.gif)

## 安装

```bash
npm install vue-ele-form-gallery --save
```

## 使用

```js
import EleForm from 'vue-ele-form'
import EleFormGallery from 'vue-ele-form-upload-file'

// 注册 gallery 组件
Vue.component('gallery', EleFormGallery)

// 注册 ele-form
Vue.use(EleForm, {
  // 可以在这里设置全局的 gallery 属性
  // 属性参考下方 #attrs
  gallery: {
    size: 150
  }
})
```

```js
formDesc: {
  xxx: {
    label: 'xxx',
    type: 'gallery', // 只需要在这里指定为 gallery 即可
    // 属性参考下方 #attrs
    attrs: {
      size: 200
    }
  }
}
```

## 示例

```html
<template>
  <el-card
    header="ele-form-gallery 演示"
    shadow="never"
    style="max-width: 1250px;margin: 20px auto;"
  >
    <ele-form
      :form-data="formData"
      :form-desc="formDesc"
      :request-fn="handleRequest"
      @request-success="handleSuccess"
    />
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      formData: {
      },
      formDesc: {
        avatar: {
          label: '头像',
          type: 'gallery',
          attrs: {
            size: 100
          },
          default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570081195520&di=5d0bbf4075c486b447036c438be3707a&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120718%2FImg348433926.jpg'
        },
        movie: {
          label: 'mp4 演示',
          type: 'gallery',
          default: 'https://s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4',
          attrs: {
            type: 'video'
          }
        },
        iframe: {
          label: 'iframe演示',
          type: 'gallery',
          default: 'https://player.bilibili.com/player.html?aid=68862905&cid=119344504&page=1',
          attrs: {
            type: 'iframe'
          }
        },
        images: {
          label: '多文件演示',
          type: 'gallery',
          default: [
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
          ]
        }
      }
    }
  },
  methods: {
    handleRequest (data) {
      console.log(data)
      return Promise.resolve()
    },
    handleSuccess () {
      this.$message.success('提交成功')
    }
  }
}
</script>

<style>
body {
  background-color: #f0f2f5;
}
</style>
```

## attrs

> 具体使用请参考: [vue-ele-gallery](https://github.com/dream2023/vue-ele-gallery)

```js
attrs: {
  // 类型(支持图片, 视频, iframe)
  type: {
    type: String,
    default: 'image',
    validator (value) {
      return ['image', 'video', 'iframe'].includes(value)
    }
  },
  // 缩略图大小, 宽 === 高时, 简略写法
  size: Number,
  // 缩略图宽度, 当给定width时, 会覆盖size的值
  // 图片时, 默认是: 150px, 另外两种是: 360px
  width: Number,
  // 缩略图高度, 当给定height时, 会覆盖size值
  // 图片时, 默认是: 150px, 另外两种是: auto
  height: Number,
  // 缩略图是否懒加载
  lazy: {
    type: Boolean,
    default: false
  },
  // 缩略图后缀
  // 当type为image时, 且未指定thumb, 可通过thumbSuffix设置缩略图
  thumbSuffix: String,
  // 缩略图样式
  thumbStyle: Object,
  // 轮播图属性
  carouselAttrs: Object,
  // 删除函数
  removeFn: Function
}
```

## 相关链接

- [vue-ele-gallery](https://github.com/dream2023/vue-ele-gallery)
- [vue-ele-form](https://github.com/dream2023/vue-ele-form)
- [element-ui](http://element-cn.eleme.io)
