<template>
    <div id="navigation-bar">
        <a class="nav-bar-home" href="/">主页</a>
        <div class="nav-bar-inner">
            <router-link :to="{path: '/posts'}" class="nav-item">文章</router-link>
            <router-link :to="{path: '/tags'}" class="nav-item">标签</router-link>
            <router-link :to="{path: '/categories'}" class="nav-item">分类</router-link>
            <router-link :to="{path: '/about'}" class="nav-item">关于</router-link>
            <!-- <input-text/> -->
            <router-link :to="{path: '/search'}" class="nav-item"><svg-icon icon-class="search" class-name="search"></svg-icon></router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>

<style scoped>
#navigation-bar {
    /* flex: 0 0 auto; */
    /* position: relative; */
    right: 0px;
    width: 100%;
    height: 50px;
    background:  #f8f8f8;
}
#navigation-bar:hover {
    box-shadow: 0px 8px 16px #f0f0f0;
    transition: 250ms;
}

.svg-icon.search {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}

.nav-bar-inner {
    position: absolute;
    /* width: 30%; */
    padding: 0;
    right: 40px;
    top: 0px;
}

.nav-item {
    display: block;
    float: left;
    text-decoration: none;
    color: #161209;
    text-align: center;
    line-height: 50px;
    padding: 0 10px;
    font-family:微软雅黑, Geneva, sans-serif;
}

.nav-bar-home {
    margin-left: 50px;
    font-weight: bold;
    font-size: 1.5em;
    display: block;
    text-decoration: none;
    color: #161209;
    text-align: left;
    line-height: 50px;
    font-family:微软雅黑, Geneva, sans-serif;
}

</style>