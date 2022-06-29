<template>
    <div id="navigation-bar">
        <a class="nav-bar-home" href="#">主页</a>
        <div class="nav-bar-inner">
            <a class="nav-item" href="#">文章</a>
            <a class="nav-item" href="#">标签</a>
            <a class="nav-item" href="#">分类</a>
            <a class="nav-item" href="#">关于</a>
            <a class="nav-item" href="#">搜索</a>
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
    position: relative;
    right: 0px;
    width: 100%;
    height: 56px;
    background:  #f8f8f8;
}
#navigation-bar:hover {
    box-shadow: 0px 8px 16px #f0f0f0;
    transition: 250ms;
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
    position: fixed;
    left: 65px;
    font-weight: bold;
    font-size: 1.5em;
    display: block;
    text-decoration: none;
    color: #161209;
    text-align: center;
    line-height: 56px;
    font-family:微软雅黑, Geneva, sans-serif;
}

</style>