<template>
    <li>
        <a :href="'#' + items.id">{{items.text}}</a>
    </li>
</template>

<script>


export default {
    name: "NavItemsComponent",
    props:{
        items:Object
    }
};
</script>

<style lang="scss" scoped>
a{
    position:relative;
    text-decoration: none;
    margin:20px;
    color:#aeafae;
}
a:after{
    content: "";
    position:absolute;
    left:0;
    background-color:#d5625f;
    height: 3px;
    width: 0%;
    bottom:-10px;
    transition: 1s;
}
a:hover{
    color:#d5625f;
}

a:hover:after{
    width: 100%;
}
</style>