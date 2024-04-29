<!--
This HTML snippet creates product cards, each containing an image and product details
Each card represents a product, displaying its image, name, and price.
-->

<template>
    <div class="card-container">
        <img class="img-container" src='products/product1.png'>
        <div class="details-container">
            <p>Sofa 243</p>
            <p>$156</p>
            <button style="background-color: #3498db; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Añadir al carrito</button>
        </div>
    </div>
    <div class="card-container">
        <img class="img-container" src='products/product2.png'>
        <div class="details-container">
            <p>Lamp 54</p>
            <p>$756</p>
            <button style="background-color: #3498db; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Añadir al carrito</button>

        </div>
    </div>
    <div class="card-container">
        <img class="img-container" src='products/product3.png'>
        <div class="details-container">
            <p>Fotal 34</p>
            <p>$362</p>
            <button style="background-color: #3498db; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Añadir al carrito</button>
        </div>
    </div>
    <div class="card-container">
        <img class="img-container" src='products/product4.png'>
        <div class="details-container">
            <p>Fotal324</p>
            <p>$505</p>
            <button style="background-color: #3498db; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Añadir al carrito</button>
        </div>
    </div>
    <div class="card-container">
        <img class="img-container" src='products/product5.png'>
        <div class="details-container">
            <p>sofa-1</p>
            <p>$243</p>
            <button style="background-color: #3498db; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Añadir al carrito</button>
        </div>
    </div>
    <div class="card-container">
        <img class="img-container" src='products/product6.png'>
        <div class="details-container">
            <p>Fotal-2 </p>
            <p>$44</p>
            <button style="background-color: #3498db; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Añadir al carrito</button>

        </div>
    </div>
</template>


<!-- 
This scoped style block defines appearance for elements within a Vue.js component: .details-container centers text, fills width, aligns to bottom; .img-container fixes width, maintains aspect ratio, centers content; .card-container sets rounded corners, borders, background, dimensions, and centers content.
-->
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

<!-- 
Scoped style block: .details-container centers text, fills width, aligns to bottom; .img-container fixes width, maintains aspect ratio, centers content; .card-container sets rounded corners, borders, background, dimensions, and centers content.
 -->

<style scoped>

    .details-container{
        text-align: center;
        object-fit: cover;
        margin-top: auto;
        width: 100%; /* Ajusta el ancho del contenedor de detalles */

    }
    .img-container{
        width: 120px;
        height: auto;
        object-fit: cover;
        justify-content: center;
        align-items: center;
    }
    .card-container{
        border-radius: 2%;
        border-style: solid;
        border-color: #d9d9d9;
        border-width: 0.2px;
        width: 18vw;
        height: 45vh;
        background-color: #FFFFFF;
        overflow: hidden;
        text-align: center;
    }
    
   
</style>
