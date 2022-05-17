<template>
    <div class="container-fluid under-foot g-0">
        <div class="container last-cont-footer">
            <h6 class="color">&copy; Copyright 2012 - 2020 | 
                Avada theme by Theme Fusion |
                All Rights Reserved |
                Powered by WordPress
            </h6>

            <div class="ico">
               <img width="15px" src="../assets/img/facebook.png" alt="">
               <img width="18px" src="../assets/img/twitter.png" alt="">
               <img width="20px" src="../assets/img/instagram.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ooterinfodevComponent"
}
</script>


<style lang="scss" scoped>
.container-fluid{
    overflow: hidden;
    height: 10vh;
    background-color:#212425;
    width: 1896px;
    margin-left: -3px;

    .last-cont-footer{
        display:Flex;
        justify-content: space-between;
        padding:20px 50px;
        height: 100%;
        align-content: center;
        align-items: center;
    }

    .ico > img{
        margin:10px;
        width: 30px;
        height: 30px;
        padding:5px;
        background-color:#d5625f;
        border-radius: 10%;
    }
    
}

.color{
    color:#6b6b6b;
}
</style>