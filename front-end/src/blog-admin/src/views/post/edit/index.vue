<template>
  <div class="container">
    <textarea class="md-text" rows="10" v-model="content"/>
    <markdown-it-vue
      class="md-body"
      :content="content"
      :options="options"
      @render-complete=hdlCmplete
    />
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import MarkdownText from './example'
export default {
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: MarkdownText,
      options: {
        markdownIt: {
          linkify: true
        },
        linkAttributes: {
          attrs: {
            target: '_self',
            rel: 'noopener'
          }
        }
      }
    }
  },
  methods: {
    hdlCmplete() {
      console.log('reder complete')
    }
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
  width: 100%;
}

.md-text {
 width: 50%;
 margin: 20px;
}
.md-body {
  width: 50%;
  margin: 20px;
}
</style>
