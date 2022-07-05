<template>
    <div>
        <ul>
            <li v-for="tag in tags" v-bind:key="tag.id">
                <router-link :to="{path: '/tags/'+tag.id}">
                    <svg-icon icon-class="tag" class-name="tag"></svg-icon>
                    {{ tag.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import { getTags } from '@/api/tags'

export default {
  name: 'BlogTags',
  components: {

  },
  data() {
    tags: []
  },
  created() {
    // getPosts({ pageIndex: 0, pageSize: 3 }).then(res => {
    //   this.recentPosts = res.data.data
    // })

    this.tags = getTags().data
    console.log(this.tags)
  }
}
</script>


<style scoped>
.svg-icon.tag {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.2rem;
  fill: currentColor;
  overflow: hidden;
}
</style>

