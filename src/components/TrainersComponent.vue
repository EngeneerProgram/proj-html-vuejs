<template>
    <div class="container-fluid trainer-container">
        <div class="container center-content">
            <h2 class="white">MEET OUR TRAINERS</h2>
            <img class="mt-3" width="30px" src="../assets/img/divider-xx-red.png" alt="">
            <div class="row pt-5">
                <div class="col">
                First, but unordered
                </div>
                <div class="col order-12">
                Second, but last
                </div>
                <div class="col order-1">
                Third, but first
                </div>
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
.white{
    color:white;
}
.trainer-container{
    height: 80vh;
    background-color:#252a2d;
    display:Flex;
    justify-content: center;
    
    .center-content{
        padding-top:4rem;
        display:Flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
    }

    .col{
        width: 397px;
        height: 416px;
        background-color:red;
        margin:10px;
    }
    
}
</style>