<template>
  <div class="menu-footer">
     <ul class="menu-1">
       <h5 class="grey-it">COME FIND US</h5>
    <ElementFooterComponent
      :items="items"
      v-for="items in list_find"
      :key="items.id"
    />
  </ul>

  
  <ul class="menu2">
    <h5 class="grey-it">RECENT POST</h5>
      <ElementFooterComponent
      :items="items"
      v-for="items in second_list"
      :key="items.id"
      
    />
    <div id="color-border" class="border-bottom0"></div>
    <div class="border-bottom2"></div>
  </ul>

  <ul class="menu3">
    <h5 class="grey-it">OPENING TIME</h5>
        <ElementFooterComponent
      :items="items"
      v-for="items in last_list"
      :key="items.id"
    />
    
  </ul>

  <div class="image">
<img class="img-foot" src="../assets/img/gym_ad-compressor.jpg" alt="">
  </div>
  </div>
</template>


<script>
import ElementFooterComponent from "./ElementFooterComponent.vue";
export default {
  components: { ElementFooterComponent },
  data() {
    return {
      list_find: [
        {
          id: 1,
          text1: "12345 North Main Street",
        },

        {
          id: 2,
          text1: "New York, NY 5555555",
        },

        {
          id: 3,
          text1: "Phone: 1.800.555.6789",
        },

        {
          id: 4,
          text1: "Email: info@your-domain.com",
        },
        
      ],

      second_list: [
          {
          id: 5,
          text2: "> Train with free weights or your body wight?",
        },
        {
          id: 6,
          text2: "> Nutritional advice that will keep you training",
        },
        
      ],

      last_list:[
          {
          id: 7,
          text3: "Weekdays Monday-Friday",
          text31: "09:00 - 19:00",
        },

        {
          id: 8,
          text3: "Weekends Saturday-Sunday",
          text31: "09:00 - 21:00",
        },
      ]

      
    };
  },
};
</script>


<style lang="scss">
ul{
    list-style-type: none;
}

.menu-footer{
    display:Flex;
    margin:15px;
    justify-content:space-between;
    position:relative;
    width: 73%;
    
}



.menu2{
  width: 280px;
  position: relative;
}

.img-foot{
  position: absolute;
    top: 0px;
    right: -323px;
}

.grey-it{
    color:#6b6b6b;
}


.border-bottom0{
  width: 95%;
  height: 1px;
  background-color:#6b6b6b;
  position:absolute;
  top:106px;
}



.border-bottom2{
  width: 106%;
  height: 1px;
  background-color:#6b6b6b
}

</style>