<template>
  <div class="container-fluid container-news">
    <div class="container center-card">
      <div>
           <font-awesome-icon class="ico-down" icon="fa-solid fa-caret-down" />
        </div>

        <h2>PERFORMANCE NEWS</h2>
        <span class="img-x text-center"><img class="text-center" width="30px" src="../assets/img/divider-xx-red.png" alt=""></span>
    </div>
  </div>
</template>


<script>
export default {
  name: "NewsGymComponent",
};
</script>
<style lang="scss">
.container-news {
  height: 80vh;
  background-color: #6b6b6b;
  display:flex;
  
  
  }

  .center-card{
      display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    padding-top:7rem;
  }



  
   
   
   
   

      
    

    

.ico-down{
       color: #252a2d;;
       
        position:absolute;
        font-size: 70px;
        top:6100px;
        left:50%;
    }
    


   
      

</style>