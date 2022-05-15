<template>
    <div class="container-fluid banner-background">
        <h2 class=" line white text-center">" I fear not the man who has praticed 10,000 <br>kicks once, but i fear the man who has <br>practiced one kick 10,000 times "</h2>
        
        <h5 class="text-center pt-5 white">BRUCE LEE <font-awesome-icon icon="fa-regular fa-circle" />QUOTE OF THE DAY</h5>
        
    
    </div>
</template>


<script>
export default {
    name:"BannerComponent",
}
</script>


<style lang="scss" scoped>
.banner-background{
    min-height: 65vh;
    background-image: url("../assets/img/home-testimonial-bg.jpg");
    background-position: center;
    display:Flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    .line{
        line-height: 50px;
    }
    
    .white{
        color:white;
    }

    
    
    
}
</style>