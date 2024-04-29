<!--This Vue.js template defines the structure of a web page with a main container, header section, dynamic title, subtitle, content section, and components for displaying product categories and a product grid.-->

<template>
    <div class="contenedor-principal">
        <div class="cabecera">
            <h1 class="">{{titulo}}</h1>
            <h2 class="sections">Home / 
                    <span class="test">Productos</span>
            </h2>
        </div>
        <div class="content-page">
            <CategoriasReto />
            <GridReto />
        </div>
    </div>
</template>

<!-- In this section, we import two components (CategoriasReto and GridReto) and export a Vue component named TiendaReto. 
Inside the component object, we specify its name and declare the components it uses (CategoriasReto and GridReto).
 We also define a data function returning an object with a titulo property set to 'Listado'. -->
<script>
import CategoriasReto from './CategoriasReto.vue'
import GridReto from './GridReto.vue'

export default {
    name:'TiendaReto',
    components:{
        CategoriasReto,
        GridReto
    },
    data(){
        return {
            titulo:'Listado'
        }
    }
}
</script>
<!-- Here, we define styles for the .cabecera, .sections, .test, and .content-page classes. .cabecera is centered, .sections has a top margin, .test sets the color to a specific shade of yellow, and .content-page arranges its children in a row with space around them.-->

<style scoped>
    .cabecera{
        text-align: center;
    }
    .sections{
        margin-top: 20px;
    }
    .test{
        color: #F3D03C;
    }
    .content-page{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>