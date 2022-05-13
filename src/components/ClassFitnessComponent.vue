<template>
    <div class="container-fluid container-gym">
        <div class="container spaceof  text-center ">
            <h2 class="white">Word Class Fitness</h2>
            <span><img src="../assets/img/divider-xx-red.png" alt=""></span>
            <div class="div">
                <p class="description">
                    At Avada Gym, everything we do 
                    from top to bottom is of the highest quality to ensure we're 
                    equipped <br> to help you reach your goals of a healthy and fit lifestyle.
                </p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "ClassFitnessComponent",
}
</script>


<style lang="scss" scoped>
.container-gym{
    padding:100px;
    background-color:#252a2d;

    
}
.spaceof{
    line-height: 50px;
}
.white{
        color:white;
        font-size: 60px;
    }

    .description{
        color:#aeafae;
    }
</style>