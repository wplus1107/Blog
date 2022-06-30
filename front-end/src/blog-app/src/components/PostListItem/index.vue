<template>
    <div id="post-list-item">
        <div class="title">
            <a>{{ postData.title }}</a>
        </div>
        <div class="category">
            <!-- <a style="float: left;">收录于</a> -->
            <div style="float: left;width: 100%"> 
                <ul>
                    <li v-for="cat in postData.categories" :key="cat">
                        <!-- <a href="#"> -->
                            <!-- <svg-icon icon-class="category" class-name="category"></svg-icon> -->
                            {{ cat }}
                        <!-- </a> -->
                    </li>
                </ul>
            </div>
            

        </div>
        <div class="tags">
            <a>{{ postData.title }}</a>
        </div>
        <div class="date">
            <a>{{ postData.title }}</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PostListItem',
  props: ['postData']
}
</script>

<style scoped>
.title {
    text-align: left;
    font-weight: bold;
    font-size: 1.2em;
    color: #000;
}

.category {
    text-align: left;
    font-size: 0.8em;
    height: 100px;
    width: 60%;
    color: #262626;
}

.category ul {
    width: 100%;
    height: 40px;
}

.category ul li {
    float: left;
    list-style: none;
    font-size: 0.8em;
    color: #262626;
    /* height: 1em; */
    width: auto;
}

.category ul li a {
    text-decoration: none;
    color: #262626;
}

.svg-icon.category {
  width: 1em;
  height: 1em;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}

</style>