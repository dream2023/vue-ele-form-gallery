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
  name: 'App',
  data () {
    return {
      formData: {
        files: []
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
  },
  mounted () { }
}
</script>

<style>
body {
  background-color: #f0f2f5;
}
</style>
