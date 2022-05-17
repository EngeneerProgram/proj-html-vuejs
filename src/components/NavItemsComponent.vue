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
    text-decoration: none;
    margin:20px;
    color:#aeafae;
}

a:hover{
    color:#d5625f;
}
</style>