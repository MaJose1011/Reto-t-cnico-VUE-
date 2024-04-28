<template>
    <div class="grid-container">
        <div class="grid">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
    name:'GridReto',
    components:{
        ProductCard
    },
    data(){
        return {
            titulo:'Listado'
        }
    }
}
</script>


<style scoped>
    .grid-container{
        width: 70vw;
    }
    .grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 5px;
    }
</style>