<template>
    <div class="container-fluid brand-container">
        <div class="container objet-fitness">
            <div class="text">
                <h1 class="white">Achieve Your Fitness Goals</h1>
                <p class="white">Flexsible membership packages to suit all levels of athlete and achive your fitness goals</p>
            </div>
            
                <a href="#">JOIN US</a>
            

        </div>
    </div>
</template>

<script>
export default {
    name: "BrandComponent",
}
</script>

<style lang="scss" scoped>
.brand-container{
    height: 38vh;
    background-image: url("../assets/img/home-parallax.jpg");
    background-size: cover;
}

.objet-fitness{
    display:flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: center;
    height: 100%;
}
.text{
    margin-left:50px;
    
}
p{
    letter-spacing: 1px;
}
.white{
    color:white;
}
 a{
    text-decoration: none;
        border:1px solid #aeafae;
        padding:15px 45px;
        color:white;
        margin-left:100px;
        letter-spacing: 2px;
}

a:hover{
    color:white;
}

</style>