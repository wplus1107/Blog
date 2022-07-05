<template>
    <div>
        文章列表
    </div>
</template>

<script>

import { getPostsDate } from '@/api/posts'

export default {
  name: 'BlogPosts',
  components: {

  },
  data() {
    postsDate: []
  },
  created() {
    // getPosts({ pageIndex: 0, pageSize: 3 }).then(res => {
    //   this.recentPosts = res.data.data
    // })

    this.postsDate = getPostsDate()
    console.log(this.postsDate)
  }
}
</script>


<style scoped>

</style>

