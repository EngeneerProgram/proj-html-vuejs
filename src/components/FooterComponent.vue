<template>
    <div class="container-fluid footer-container">
       <div class="container foot-cont">
            <FooterItemsComponent/>
             
       </div>
      <FooterInfodevComponent/>
    </div>
</template>


<script>
import FooterItemsComponent from './FooterItemsComponent.vue';
import FooterInfodevComponent from './FooterInfodevComponent.vue';

export default {
    name: "FooterComponent",
    components: { FooterItemsComponent, FooterInfodevComponent }
}
</script>


<style lang="scss" scoped>
.footer-container{
    height: 40vh;
    background-color:#252a2d;

    .foot-cont{
        width: 100%;
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