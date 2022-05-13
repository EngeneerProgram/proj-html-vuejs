<template>
<div class="main">
    <div class="container-fluid jumbotron d-flex justify-content-center align-content-center">
            <div class="container-header">
                
                <HeaderComponent/>
               
                 <div class="container jumbo-intro">
                    <h1 class="jumbo_motivation">No pain no gain</h1>
                    <p class="sub_intro">Motivation is what gets you starterd. Habit is what keeps you hoing</p>
                    <div class="button_intro pt-5">
                        <a href="#" class="join text-uppercase">Join Us Today</a>
                    </div>
                </div>
            </div>
    </div>

                <ClassFitnessComponent/>

            


</div>
</template>




<script>
import HeaderComponent from "./HeaderComponent.vue"
import ClassFitnessComponent from "./ClassFitnessComponent.vue"
export default {
   name: "MainComponent",
   components:{
    HeaderComponent,
    ClassFitnessComponent
}
}
</script>


<style lang="scss" scoped>
.container-fluid{
    
    
    
    .container-header{
        width: 1650px;
        padding-top:70px;

        
    }

    .jumbo-intro{
        padding-top: 250px;
        text-align: center;
        .jumbo_motivation{
            font-weight: bold;
            color:white;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 100px;
            color:#fefefe;
        }

        .sub_intro{
            color:#aeafae;
            letter-spacing: 1.5px;
        }
        a{
        
        text-decoration: none;
        border:1px solid white;
        padding:15px 20px;
        color:#aeafae;
        }
    }
    
}

.jumbotron{
    background-image: url("../assets/img/home-banner.jpg");
    height: 100vh;
}
</style>