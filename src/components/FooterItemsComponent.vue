<template>
    <ul class="menu">
        <ElementFooterComponent :items="items" v-for="items in list_find" :key='items.id'/>
    </ul>
</template>


<script>
import ElementFooterComponent from './ElementFooterComponent.vue';
export default {
    components: { ElementFooterComponent },
    data(){
        return{
            list_find:[
                {
                    id: 1,
                    text: "12345 North Main Street"
                },

                {
                    id:2,
                    text:"New York, NY 5555555"
                },

                {
                    id:3,
                    text: "Phone: 1.800.555.6789"
                },

                {
                    id:4,
                    text:"Email: info@your-domain.com"
                }
            ],

            list_recent_post:[
                    {
                        id: 1,
                        text: "Train with free weights or your body wight?"
                    },
                    {
                        id: 2,
                        text:"Nutritional advice that will keep you training"
                    }
            ],

            list_opening:[
                {
                    id:1,
                    text:"Weekdays Monday-Friday",
                    text2: "09:00 - 19:00"
                },

                {
                    id:2,
                    text:"Weekends Saturday-Sunday",
                    text2:"09:00 - 21:00"
                }

            ]
        }
    }
}
</script>