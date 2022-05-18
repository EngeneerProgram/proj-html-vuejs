<template>
  <div class="container-fluid container-news">
    <div class="container center-card">
      <div>
        <font-awesome-icon class="ico-down" icon="fa-solid fa-caret-down" />
      </div>

      

      <div class="container-card container">
        <h2 class=" white">PERFORMANCE NEWS</h2>

      <span class="img-x text-center"
        ><img
          class="text-center"
          width="30px"
          src="../assets/img/divider-xx-red.png"
          alt=""
      /></span>
        <div class="up">
          <div class="card1 bg m-3">
            <div class="image1">

            </div>
            <div class="paragraph1">
              <h5 class="white">Train with free weight or <br>youy body weight?</h5>
              <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum tempore quibusdam reprehenderit non vel ullam vitae quo corporis nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, possimus.</p>
            </div>
          </div>
        <div class="card2 bg m-3">
          <div class="image2"></div>
            <div class="paragraph2">
              <h5 class="white">Train with free weight or <br>youy body weight?</h5>
              <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum tempore quibusdam reprehenderit non vel ullam vitae quo corporis </p>
            </div>
        </div>
        <div class="card3 bg m-3">
          <div class="image3"></div>
            <div class="paragraph3">
              <h5 class="white">Train with free weight or <br>youy body weight?</h5>
              <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum tempore quibusdam reprehenderit non vel ullam vitae quo corporis nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, possimus.</p>
            </div>
        </div>
        </div>
        <div class="down">
          <div class="card4 bg m-3">
            <div class="image4"></div>
            <div class="paragraph4">
              <h5 class="white">Train with free weight or <br>youy body weight?</h5>
              <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum tempore quibusdam reprehenderit non vel ullam vitae quo corporis nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, possimus.</p>
            </div>
          </div>
        <div class="card5 bg m-3">
          <div class="image5"></div>
            <div class="paragraph5">
              <h5 class="white">Train with free weight or <br>youy body weight?</h5>
              <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum tempore quibusdam reprehenderit non vel ullam vitae quo corporis nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, possimus.</p>
            </div>
        </div>
        <div class="card6 bg m-3">
          <div class="image6"></div>
            <div class="paragraph6">
              <h5 class="white">Train with free weight or <br>youy body weight?</h5>
              <p class="grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum tempore quibusdam reprehenderit non vel ullam vitae quo corporis nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, possimus.</p>
            </div>
        </div>
        </div>
       <div class="button">
          <a href="#" class="read">READ ALL ARTICLES</a>
       </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "NewsGymComponent",
};
</script>
<style lang="scss">
.button{
  margin-top:5rem;
}
.white{
  color:white;
}

.grey{
  color:#6b6b6b;
  line-height: 30px;
}
.container-news {
  height: 175vh;
  background-color: #6b6b6b;
  display: flex;
}
.read{
      text-decoration: none;
        border:1px solid #aeafae;
        padding:15px 20px;
        color:#aeafae;
}

.read:hover{
  color:#aeafae;
}
.center-card {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  padding-top: 4rem;
}
.ico-down {
  color: #252a2d;

  position: absolute;
  font-size: 70px;
  top: 5888px;
  left: 50%;
}

.card1{
   width: 380px;
  height: 520px;
}

.card2{
   width: 380px;
  height: 650px;
}
.card3{
  width: 380px;
  height: 520px;
}

.card4{
   width: 380px;
  height: 520px;
  position: absolute;
    top: 670px;
    left: 30px
}

.card5{
   width: 380px;
  height: 520px;
}

.card6{
   width: 380px;
  height: 520px;
  position: absolute;
    right: 30px;
    top: 670px
}

.container-card{
  display:Flex;
  justify-content: center;
  flex-direction: column;
  align-items:Center;
  position:relative;
}



.up{
  display:Flex;
  padding-top:3rem;
}

.down{
  display:Flex;
  
}

.image1{
  height: 100%;
  height: 45%;
  background-image: url("../assets/img/blog1-600x312.jpg");
  background-position: center;
  background-size: cover;
}

.paragraph1{
  width: 100%;
  height: 55%;
  background-color:#252a2d;
  padding:30px;
}

.image2{
  width: 100%;
  height: 60%;
  background-image: url("../assets/img/blog6.jpg");
  background-position: center;
  background-size: cover;
  
}

.paragraph2{
width: 100%;
height: 40%;
background-color:#252a2d;
padding:30px;
}

.image3{
  height: 100%;
  height: 45%;
  background-image: url("../assets/img/trainer4.jpg");
  background-position: center;
  background-size: cover;
}

.paragraph3{
   width: 100%;
  height: 55%;
  background-color:#252a2d;
  padding:30px;
}

.image4{
  height: 100%;
  height: 45%;
  background-image: url("../assets/img/blog4.jpg");
  background-position: center;
  background-size: cover;
}

.paragraph4{
   width: 100%;
  height: 55%;
  background-color:#252a2d;
  padding:30px;
}

.image5{
  height: 100%;
  height: 45%;
  background-image: url("../assets/img/trainer3.jpg");
  background-position: center;
  background-size: cover;
}

.paragraph5{
   width: 100%;
  height: 55%;
  background-color:#252a2d;
  padding:30px;
  }

.image6{
  height: 100%;
  height: 45%;
  background-image: url("../assets/img/trainer1.jpg");
  background-position: center;
  background-size: cover;
}

.paragraph6{
   width: 100%;
  height: 55%;
  background-color:#252a2d;
  padding:30px;
}

</style>