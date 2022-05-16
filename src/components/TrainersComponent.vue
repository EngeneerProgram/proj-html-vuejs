<template>
    <div class="container-fluid trainer-container">
        <div class="container center-content">
            <h2 class="white">MEET OUR TRAINERS</h2>
            <img class="mt-3" width="30px" src="../assets/img/divider-xx-red.png" alt="">
            <div class="row pt-5">
                <div class="col">
                <div class="thumb thu1">
                    
                </div>
                <div class="paragraph par1">
                    <h5 class="white">Ann Baker</h5>
                    <h5 class="white">Personal Trainer</h5>

                    <p class="white pt-3">Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit. In augue <br>nisl, onare volutpat.</p>
                    <div class="ico pt-4">
                        <img  width="20px" src="../assets/img/facebook.png" alt="">
                        <img width="20px" src="../assets/img/twitter.png" alt="">
                        <img width="20px" src="../assets/img/instagram.png" alt="">
                    </div>
                
                </div>
                </div>
                <div class="col order-12">
                    <div class="thumb thu2">
                    
                </div>
                <div class="paragraph par2">
                    <h5 class="white">Anne Warren</h5>
                    <h5 class="white">Personal Trainer</h5>

                    <p class="white pt-3">Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit. In augue <br>nisl, onare volutpat.</p>
                    <div class="ico pt-4">
                        <img  width="20px" src="../assets/img/facebook.png" alt="">
                        <img width="20px" src="../assets/img/twitter.png" alt="">
                        <img width="20px" src="../assets/img/instagram.png" alt="">
                    </div>             
                </div>
                </div>
                <div class="col order-1">
                    <div class="thumb thu3">
                    
                </div>
                <div class="paragraph par3">
                    <h5 class="white">Peter Rice</h5>
                    <h5 class="white">Personal Trainer</h5>

                    <p  class=" pt-3 white">Lorem ipsum dolor sit amet, <br>consectetur adipiscing elit. In augue <br>nisl, onare volutpat.</p>
                    <div class="ico pt-4">
                        <img  width="20px" src="../assets/img/facebook.png" alt="">
                        <img width="20px" src="../assets/img/twitter.png" alt="">
                        <img width="20px" src="../assets/img/instagram.png" alt="">
                    </div>
                </div>
                </div>
            </div>
            <div class="btb">
                <a class="join " href="#">VIEW ALL TRAINERS</a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"TrainersComponent"
}
</script>

<style lang="scss" scoped>
.btb{
    margin-top:5rem;
}
.join{
      text-decoration: none;
        border:1px solid #aeafae;
        padding:15px 20px;
        color:#aeafae;
        
}

.ico {
    width: 130px;
    
    display:Flex;
    justify-content: space-between;
}

.ico>img{
    padding:7px;
    width: 35px;
    height: 35px;
    border:1px solid #252a2d;;
    background-color:#252a2d;
    border-radius: 10px;
    cursor: pointer;
    }
.col{
    display:Flex;
    flex-direction: column;
    width: 370px;
        height: 550px;
        
        margin:30px;
}

.thumb{
    width: 100%;
    height: 40%;
}

.thu1{
    background-image: url("../assets/img/trainer1.jpg");
    background-size: cover;
    background-position: center;
}

.thu2{
     background-image: url("../assets/img/trainer3.jpg");
    background-size: cover;
    background-position: center;
}

.thu3{
     background-image: url("../assets/img/trainer4.jpg");
    background-size: cover;
    background-position: center;
}

.paragraph{
    width: 100%;
    height: 60%;
    padding:30px;
   line-height: 30px;
   background-color:#6b6b6b;

   p{
       color:#aeafae;
   }
}
.white{
    color:white;
}
.trainer-container{
    height: 105vh;
    background-color:#252a2d;
    display:Flex;
    justify-content: center;
    
    .center-content{
        padding-top:3rem;
        display:Flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        
        
    }

    
    
}
</style>