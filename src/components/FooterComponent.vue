<template>
    <div class="container-fluid footer-container">
       <div class="container foot-cont">
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

    .foot-cont{
        height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
}
    }

</style>