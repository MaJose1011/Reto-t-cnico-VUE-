<template>
    <div class="category-container">
        <h3>Categorías +</h3>
        <div class="categories">
            <p>Mesas</p>
            <p>Lamparas</p>
            <p>Sillas</p>
            <p>Sofas</p>
        </div>
    </div>
</template>

<script>

export default {
    
    name:'CategoriasReto',
    data(){
        return {
            titulo:'Listado'
        }
    }
}
</script>


<style scoped>
    h3{
        margin-top: 30px;
    }
    .categories{
        margin-top: 30px;
        margin-left: 50px;
        text-align: left;
    }
    .category-container{
        margin-top: 20px;
        color: aliceblue;
        text-align: center;
        height: 70vh;
        width: 15vw;
        background-color: #2C3538;
        box-shadow: 4px 8px 58px -6px rgba(0,0,0,0.75);
        -webkit-box-shadow: 4px 8px 58px -6px rgba(0,0,0,0.75);
        -moz-box-shadow: 4px 8px 58px -6px rgba(0,0,0,0.75);
    }
</style>