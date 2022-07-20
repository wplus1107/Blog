<template>
    <div class="posts-container">
      <div class="posts-date">
          <ul class="posts-date-year">
            <li v-for="date in postsDate" v-bind:key="date.year">
              <a href="#">{{ date.year }}年</a>
              <!-- <ul class="posts-date-month">
                <li v-for="month in date.month" v-bind:key="month">
                  <a>{{ month }}月</a>
                </li>
              </ul> -->
            </li>
          </ul>
      </div>

      <div class="posts-list">
        <ul>
          <li v-for="post in posts" :key="post.id">
            <simple-post-list-item :postData="post"/>
          </li>
        </ul>
      </div>
    </div>
    
</template>

<script>

import { getPostsDate, getPostsByPage } from '@/api/posts'
import SimplePostListItem from '@/components/SimplePostListItem/index.vue'

export default {
  name: 'BlogPosts',
  components: {
    SimplePostListItem
  },
  data() {
    return {
      postsDate: [],
      posts: []
    }
    
  },
  created() {
    // getPosts({ pageIndex: 0, pageSize: 3 }).then(res => {
    //   this.recentPosts = res.data.data
    // })

    this.postsDate = getPostsDate().data
    this.posts = getPostsByPage({ pageIndex: 0, pageSize: 3 }).data
    console.log(this.posts)
  }
}
</script>


<style scoped>

.posts-container {
  width: 60%;
  padding: 20px 0;
  margin: 0 auto;
}

.posts-date {
  float: left;
  width: 20%;
}

.posts-date-year {
  list-style: none;
}

.posts-date-year li {
  width: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 5px 0;
  
}

.posts-date-year li a {
  text-decoration: none;
  color: #262626;
}

.posts-date-month {
  padding-left: 40px;
  list-style: none;
  background: #fff;
}
.posts-date-month li {
  width: auto;
  text-align: left;
  font-weight: normal;
  font-size: 1rem;
  padding: 0;
  background: #fff;
}

.posts-list {
  float: right;
  width: 80%;
}

.posts-list ul {
  list-style: none;
}

/* .posts-list ul li {
  border-top: 1px dashed #f2f2f2;
} */
.posts-list ul :first-child {
  border-top: none;
}


</style>

