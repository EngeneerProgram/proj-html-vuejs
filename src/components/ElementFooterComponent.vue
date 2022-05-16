<template>
    <li>
        {{items.text}}
    </li>
</template>



<script>
export default {
    name:"ElementFooterComponent",
    props:{
        items: Object
    }
};
</script>