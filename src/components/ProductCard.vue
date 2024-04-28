<template>
    <div class="card-container">
        <img class="img-container" src='products/product1.png'>
        <div class="details-container">
            <p>Sofa 243</p>
            <p>$156</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'ProductCard',
    data(){
        return {
            titulo:'Listado'
        }
    }
}
</script>


<style scoped>
    .details-container{
        text-align: center;
        object-fit: cover;
    }
    .img-container{
        width: 150px;
        height: auto;
        object-fit: cover;
    }
    .card-container{
        border-radius: 2%;
        border-style: solid;
        border-color: #d9d9d9;
        border-width: 0.2px;
        width: 15vw;
        height: 45vh;
        background-color: #FFFFFF;
        overflow: hidden;
    }

   
</style>