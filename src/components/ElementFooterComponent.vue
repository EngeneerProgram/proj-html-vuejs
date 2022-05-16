<template>
   <div class="container-list">
       <div class="sinistra">
           <p>{{items.text1}}</p>
       </div>
       <div class="centro">
           <p>{{items.text2}}</p>
       </div>
       <div class="destra">
           {{items.text3}}
           {{items.text31}}
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
.container-list{
    
}
</style>