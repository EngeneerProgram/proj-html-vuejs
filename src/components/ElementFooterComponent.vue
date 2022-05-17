<template>
   <div class="container-list">
       <div class="sinistra">
           
           <p class="grey">{{items.text1}}</p>
       </div>
       <div class="centro">
           <p class="grey">{{items.text2 }}</p>
           
           
       </div>
       <div class="destra">
           <h6 class="grey">{{items.text3}}</h6>
           <h6 class="grey-it">{{items.text31}}</h6>
       </div>

   </div>

   
    
</template>



<script>
export default {
    name:"ElementFooterComponent",
    props:{
        items: Object
    }
};
</script>

<style lang="scss">
.grey{
    color:#aeafae;
}

.grey-it{
    color:#6b6b6b;
}
</style>