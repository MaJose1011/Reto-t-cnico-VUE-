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