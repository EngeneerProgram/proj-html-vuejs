<template>
    <header>
       <LogoComponent/>

        <nav>
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Abaut Us</a></li>
                <li><a href="#">Facilities</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
    </header>
</template>


<script>
import LogoComponent from "./LogoComponent.vue";

export default {
    name: "HeaderComponent",
    components: { LogoComponent }
}
</script>

<style lang="scss" scoped>
header{
    display:flex;
    justify-content: space-between;
    

    .menu{
        height: 100%;
        display:Flex;
        align-items: center;
        
        li{
        padding:20px;   
        list-style: none;
        a{
            text-decoration: none;
            text-transform: uppercase;
            color:white;
            
        }
        
        }
    }
}


</style>