<template>
    <nav>
        <ul>
            <NavItemsComponent :items='items' v-for='items in list_Nav' :key='items.id'/>
        </ul>
    </nav>
</template>



<script>
import NavItemsComponent from './NavItemsComponent.vue'

export default {
    
    components:{
    NavItemsComponent
},
    data(){
        return{
            list_Nav:[
                {
                    id:1,
                    text: "HOME"
                },

                {
                    id:2,
                    text: "ABOUT US"
                },
                {
                    id:3,
                    text: "FACILITIES"
                },
                {
                    id:4,
                    text: "MEMBERSHIP"
                },
                {
                    id:5,
                    text: "TESTIMONIALS"
                },
                {
                    id:6,
                    text: "BLOG"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    display:Flex;
    align-content: center;

}
</style>