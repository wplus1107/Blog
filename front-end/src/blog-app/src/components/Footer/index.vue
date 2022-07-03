<template>
    <div id="blog-footer">
        <a class="blog-footer-contact">copyright - wangjh</a>
        <br/>
        <a class="blog-footer-registration">备案信息</a>
    </div>
</template>

<script>
export default {
  name: 'BlogFooter'
}
</script>

<style scoped>
#blog-footer {
    /* flex: 0 0 auto; */
    /* position: fixed; */
    /* float: right; */
    width: 100%;
    bottom: 0px;
}

.blog-footer-contact {
    text-decoration: none;
    text-align: center;
    color: #262626;
    font-size: 12px;
}
.blog-footer-registration {
    text-decoration: none;
    text-align: center;
    color: #262626;
    font-size: 12px;
}
</style>