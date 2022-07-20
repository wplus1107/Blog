<template>
    <div class="tags">
        <ul>
            <li class="li-tag" v-for="tag in tags" v-bind:key="tag.id">
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

.tags {
  width: 50%;
  margin: 0 auto;
}

.tags ul li{
  list-style: none;
  display: inline-block;
  margin: 20px;
}

.tags ul li a{
  text-decoration: none;
  color: #262626;
}

.svg-icon.tag {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.2rem;
  fill: currentColor;
  overflow: hidden;
}
</style>

