<template>
    <div id="post-list-item">
        <div style="width:60%;float:left;height:60px;position:relative;">
            <div class="title">
                <router-link :to="{path: '/posts/'+postData.id}">{{ postData.title }}</router-link>
            </div>
            <div class="left-bottom">
                <div class="date">
                    <a>发布于 {{ postData.date }}</a>
                </div>
                <div class="category">
                    <ul>
                        <li v-for="cat in postData.categories" :key="cat">
                            <router-link :to="{path: '/categories/'+cat}">
                                <svg-icon icon-class="category" class-name="category"></svg-icon>
                                {{ cat }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div style="width:40%;float:left;height:60px;position:relative;">
            <div class="tags">
                <ul>
                    <li v-for="tag in postData.tags" :key="tag">
                        <router-link :to="{path: '/tags/'+tag}">
                            <svg-icon icon-class="tag" class-name="tag"></svg-icon>
                            {{ tag }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="read-full">
                <router-link :to="{path: '/posts/'+postData.id}">阅读全文></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SimplePostListItem',
  props: ['postData']
}
</script>

<style scoped>
#post-list-item {
    height: 70px;
}

.title {
    position: absolute;
    line-height: 40px;
    text-align: left;
}

.title a {
    text-decoration:none;
    color: #000;
    font-weight: bold;
    font-size: 1.2rem;
}

.left-bottom {
    position:absolute;
    bottom: 4px;
    left: 0px;
}

.date {
    float: left;
    height: 16px;
    line-height: 16px;
}

.date a{
    text-align: left;
    font-size: 0.8rem;
    color: #a6a6a6;
}

.category {
    float: left;
    text-align: left;
    font-size: 0.8rem;
    color: #262626;
    height: 16px;
    line-height: 16px;
}

.category ul {
    display: inline;
    white-space: nowrap;
    margin-left: 10px;
}

.category ul li {
    display: inline-block;
    list-style: none;
    margin: 0px 04px;
    border: none;
}

.category ul li a {
    text-decoration: none;
    color: #262626;
    font-size: 0.6rem;
}

.tags {
    position: absolute;
    text-align: right;
    font-size: 0.8rem;
    top: 10px;
    right: 0px;
    color: #262626;
}

.tags ul{
    display: inline;
    white-space: nowrap;
}

.tags ul li{
    display: inline-block;
    list-style: none;
    border: none;
    color: #262626;
    width: auto;
    margin: 4px;
}

.tags ul li a {
    text-decoration: none;
    color: #262626;
    font-size: 0.6rem;
}

.read-full {
    text-align: right;
    position:absolute;
    bottom: 6px;
    right:0;
}

.read-full a {
    font-size: 0.6rem;
    color: #a6a6a6;
    margin: 0px 4px;
}

.svg-icon.category {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.2rem;
  fill: currentColor;
  overflow: hidden;
}

.svg-icon.tag {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.2rem;
  fill: currentColor;
  overflow: hidden;
}

</style>