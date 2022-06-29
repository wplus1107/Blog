<template>
    <div id="navigation-bar">
            <ul>
                <li><a id="home" href="#">主页</a></li>
                <li><a id="item" href="#">文章</a></li>
                <li><a id="item" href="#">标签</a></li>
                <li><a id="item" href="#">分类</a></li>
                <li><a id="item" href="#">关于</a></li>
                <li><a id="item" href="#">搜索</a></li>
            </ul>
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
    height: 50px;
    background:  #f8f8f8;
}
#navigation-bar:hover {
    box-shadow: 0px 8px 16px #f0f0f0;
    transition: 250ms;
}

#navigation-bar>ul {
    position: fixed;
    list-style-type: none;
    margin: 0;
    padding: 0;
    right: 0px;
}

#navigation-bar>ul>li {
    float: left;
    width: 50px;
}

#item {
    display: block;
    text-decoration: none;
    color: #262626;
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    font-family:微软雅黑, Geneva, sans-serif;
}

#home {
    position: fixed;
    left: 40px;
    font-weight: bold;
    font-size: 1.5em;
    display: block;
    text-decoration: none;
    color: #262626;
    text-align: center;
    line-height: 50px;
    font-family:微软雅黑, Geneva, sans-serif;
}

</style>