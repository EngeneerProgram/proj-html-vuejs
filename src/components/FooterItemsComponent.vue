<template>
  <div class="menu-footer">
     <ul class="menu-1">
    <ElementFooterComponent
      :items="items"
      v-for="items in list_find"
      :key="items.id"
    />
  </ul>

  
  <ul class="menu2">
      <ElementFooterComponent
      :items="items"
      v-for="items in second_list"
      :key="items.id"
    />
  </ul>

  <ul class="menu3">
        <ElementFooterComponent
      :items="items"
      v-for="items in last_list"
      :key="items.id"
    />
    
  </ul>
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
          text2: "Train with free weights or your body wight?",
        },
        {
          id: 6,
          text2: "Nutritional advice that will keep you training",
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
}

.menu3{
    display:Flex;
    flex-direction: column;
}
</style>