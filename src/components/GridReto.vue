<!-- Vue template with a grid layout containing two product card components. -->

<template>
    <div class="grid-container">
        <div class="grid">
            <ProductCard/>
            <ProductCard1/>
        </div>
    </div>
</template>

<!--This script block defines a Vue.js component named GridReto.

name: Specifies the name of the component, which is used for debugging purposes and to identify the component within Vue.js devtools.
components: Specifies the child components that are used within the GridReto component. In this case, it includes the ProductCard component.
data: This is a function that returns an object containing the component's data. In this case, it returns an object with a single property titulo set to the string 'Listado'. This data can be accessed and manipulated within the component's template. -->
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


<!--In this scoped style block:

.grid-container: Sets the width of the container to be 70% of the viewport width (70vw).
.grid: Styles a grid container by utilizing CSS Grid layout properties. It sets the display property to grid, which establishes a grid formatting context for its contents. The grid-template-columns property defines the number and size of the columns. In this case, it uses the repeat() function to create a grid with columns that are at least 200px wide (minmax(200px, 1fr)), and the auto-fill keyword allows the grid to automatically create as many columns as can fit in the available space. The grid-gap property specifies the size of the gap between grid items. -->
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

<!--   
This scoped style block defines a grid layout where each row contains three columns of equal width: 
.grid targets the grid container, display: grid; specifies it as a grid container, grid-template-columns: repeat(3, 1fr); defines three equally spaced columns, and grid-gap: 10px; sets the gap between columns.
 -->

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual ancho */
        grid-gap: 10px; /* Espacio entre las columnas */
    }
</style>