<template>
    <div id="main-container">
      <div class="self-intro">
        <div class="logo">
          <div class="logo-circle">
            <a href="/about/"><img class="logo-img" src="../../assets/logo.png"/></a>
          </div>
        </div>
        
        <div class="title">“分享知识、经验和见解”</div>
        <div class="sub-title">功不唐捐</div>
        <div class="contact">
          <a href="https://github.com/wplus1107">
            <svg-icon icon-class="github"></svg-icon>
          </a>
          <a href="https://gitlab.com/jiahao_wang">
            <svg-icon icon-class="gitlab"></svg-icon>
          </a>
          <a href="mailto:wangjiahao111@qq.com">
            <svg-icon icon-class="mail"></svg-icon>
          </a>
        </div>
      </div>
      <div class="recent-posts">
        <ul>
          <li v-for="post in recentPosts" :key="post.id">
            <post-list-item :postData="post"/>
            <div class="sep-line"></div>
          </li>
          
        </ul>
      </div>
    </div>
</template>

<script>

import PostListItem from '@/components/PostListItem/index.vue'
import { getPosts } from '@/api/posts'

export default {
  name: 'HomePage',
  components: {
    PostListItem
  },
  data() {
    recentPosts: []
  },
  created() {
    // getPosts({ pageIndex: 0, pageSize: 3 }).then(res => {
    //   this.recentPosts = res.data.data
    // })

    this.recentPosts = getPosts({ pageIndex: 0, pageSize: 3 }).data

    console.log(this.recentPosts)
  }
}
</script>

<style scoped>
#main-container {
  /* display: flex; */
  justify-content: center;
  align-items: top;
  margin: 20px;
}

.svg-icon-github {
  width: 32px;
  height: 32px;
  color: #000;
}

.self-intro {
  /* background: #fff; */
  width: 100%;
  padding: 10px;
  color: #000;
  justify-content: center;
  align-items: top;
}

.title {
  font-weight: bold;
  font-size: 1.2em;
}

.sub-title {
  font-size: 1em;
  margin-top: 10px;
}

.contact {
  margin: 16px;
}

.contact>a {
  margin: 6px;
  color: #262626;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.logo-img {
  height: 100px; 
  width: 100px; 
  border-radius: 50%;
}

.logo-circle {
  height: 100px; 
  background: #f6f6f6;
  width: 100px; 
  padding: 6px;
  border-radius: 50%;
}

.recent-posts ul {
  width: 100%;
  
}

.recent-posts ul li {
  margin: 0 25%;
  list-style: none;
  border-top: 1px dashed #f2f2f2;
}

.recent-posts ul :first-child {
  border-top: none;
}

</style>
