<template>
  <div class="container-fluid performance-container pt-5 text-center">
    <div class="container text-center ">
        <h2 class="white">HIGHT PERFOMANCE FACILITIES</h2>
        <img class="pt-4"  src="../assets/img/divider-xx-red.png" alt="">
      <div class="row pt-5 col-lg text-center d-flex justify-content-between">
        <div class="col-sm d-flex justify-content-center">
            <div class="square bg-1"></div>
        </div>
        <div class="col-sm d-flex justify-content-center">
            <div class="square bg-2"></div>
        </div>
        <div class="col-sm d-flex justify-content-center">
            <div class="square bg-3"></div>
        </div>
         
      </div>

      <div class="row pt-5 col-lg d-flex justify-content-between">
        <div class="col-sm d-flex justify-content-center">
            <div class="square bg-4"></div>
        </div>
        <div class="col-sm d-flex justify-content-center">
            <div class="square bg-5"></div>
        </div>
        <div class="col-sm d-flex justify-content-center">
            <div class="square bg-6"></div>
        </div>
         
      </div>
    </div>
  </div>
</template>


<script>
export default {
    name: "PerformanceComponent"
}
</script>


<style lang="scss" scoped>
.performance-container{
    height: 85vh;
    background-color: #6b6b6b;
    display:Flex;
    align-content: center;
    justify-content: center;
    align-content: center;

.container{
    .white{
        color:white;
    }

   
}

 .square{
        //background-image: url(../assets/img/home-image1.jpg);
        width: 370px;
        height: 220px;
        background-color:red;
    }

    .bg-1{
        background-image: url("../assets/img/home-image1.jpg");
        background-position: center;
    }

    .bg-2{
        background-image: url("../assets/img/home-image2.jpg");
        background-position: center;
    }

    .bg-3{
        background-image: url("../assets/img/home-image3.jpg");
        background-position: center;
    }

    .bg-4{
        background-image: url("../assets/img/home-image4.jpg");
        background-position: center;
    }

    .bg-5{
        background-image: url("../assets/img/home-image54.jpg");
        background-position: center;
    }

    .bg-6{
        background-image: url("../assets/img/home-image6.jpg");
        background-position: center;
    }
}
</style>