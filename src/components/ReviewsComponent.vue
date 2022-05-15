<template>
  <div class="container-fluid reviews">
    <div class="container result pt">
      <h2>Real World Result</h2>
      <img
        width="35px"
        class="ridimens text-center"
        src="../assets/img/divider-xx-red.png"
        alt=""
      />
    </div>

    <div class="container pt-3">
      <div class="row">
        
        <div class="col">
          <div class="container-review">
            <div class="left left1"></div>
            <div class="right right1">
              <p class="p-grey">
                "The Trainers at Avada Gym have helped me <br>reach my fitness goals beyand anything I could <br>of hoped for. I love it!"
              </p>
              <div>
                <h4 class="p-grey"><span>-</span> Tara Smith</h4>
              </div>
            </div>
          </div>
        </div>
         <div class="col">
          <div class="container-review">
            <div class="left left3"></div>
            <div class="right right3">
              <p class="p-grey">
                "The atmosphere at Avada Gym is amazing, the <br> people are aven better. All in all, it is a great <br>place to work out."

              </p>
              <div>
                <h4 class="p-grey"><span>-</span> Simon Chel</h4>
              </div>
            </div>
          </div>
        </div>

        
        <div class="w-100"></div>
        <div class="col">
          <div class="container-review">
            <div class="left left2"></div>
            <div class="right right2">
              <p class="p-grey">
                "The facilities at Avada Gym stood out to me the <br> most. The are well maintained and have high <br>quality equipment."
              </p>
              <div>
                <h4 class="p-grey"><span>-</span> Jen Wirth</h4>
              </div>
            </div>
          </div>
        </div> 
        <div class="col">
          <div class="container-review">
            <div class="left left4"></div>
            <div class="right right4">
              <p class="p-grey">
                "No bad things to say abaut Avada Gym, the <br> are top notch at every corner and truly take care <br> of their customers"
              </p>
              <div>
                <h4 class="p-grey"><span>-</span> Jeff Glum</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
  </div>
</template>


<script>
export default {
  name: "ReviewsComponent",
};
</script>


<style lang="scss" scoped>
.p-grey{
  color:#aeafae;
}

.white{
  color:white;
}
.reviews {
  height: 90vh;
  background-color: #6b6b6b;
}
.pt {
  padding-top: 100px;
}
.result {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
  }
}

.col {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background-color: #252a2d;
  margin: 20px;

  .container-review {
    width: 573px;
    height: 161px;

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    .review_img {
      width: 174px;
      height: 160px;
    }
  }

  .left2 {
    width: 30%;
    height: 100%;
    background-image: url("../assets/img/blog1.jpg");
    background-size: 200%;
  }

  .left1{
    
    width: 30%;
    height: 100%;
     background-image: url("../assets/img/blog6.jpg");
    background-size: 227%;
    background-position: top;
  }

  .left3{
    width: 30%;
    height: 100%;
     background-image: url("../assets/img/review_3-compressor-2.jpg");
    background-size: 103%;
    background-position: center;
  }

  .left4{
     width: 30%;
    height: 100%;
     background-image: url("../assets/img/review_4-compressor-2.jpg");
    background-size: 103%;
    background-position: top;
  }
  .right {
    width: 70%;
    height: 100%;
    display:Flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-left:50px;
    line-height: 30px;
    }
}
</style>