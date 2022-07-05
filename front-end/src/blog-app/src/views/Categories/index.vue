<template>
    <div>
        <ul>
            <li v-for="cat in categories" v-bind:key="cat.id">
                <router-link :to="{path: '/categories/'+cat.id}">
                    <svg-icon icon-class="category" class-name="category"></svg-icon>
                    {{ cat.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import { getCategories } from '@/api/categories'

export default {
  name: 'BlogCategories',
  components: {

  },
  data() {
    categories: []
  },
  created() {
    // getPosts({ pageIndex: 0, pageSize: 3 }).then(res => {
    //   this.recentPosts = res.data.data
    // })

    this.categories = getCategories().data
    console.log(this.categories)
  }
}
</script>


<style scoped>
.svg-icon.category {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.2rem;
  fill: currentColor;
  overflow: hidden;
}
</style>

