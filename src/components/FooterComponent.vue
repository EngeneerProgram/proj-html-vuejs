<template>
    <div class="container-fluid footer-container">
       <div class="container">
            <FooterItemsComponent/>
       </div>
    </div>
</template>


<script>
import FooterItemsComponent from './FooterItemsComponent.vue';

export default {
    name: "FooterComponent",
    components: { FooterItemsComponent }
}
</script>


<style lang="scss" scoped>
.footer-container{
    height: 40vh;
    background-color:#6b6b6b;
}
</style>