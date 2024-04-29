<!-- This template block defines the structure of a component responsible for displaying categories.

It contains a <div> element with the class category-container, which serves as a container for the category content.
Inside the container, there's an <h3> element displaying the text "Categorías +", which likely indicates that users can click on it to view more categories.
Below the <h3> element, there's another <div> element with the class categories, containing <p> elements for each category, such as "Mesas", "Lámparas", "Sillas", and "Sofás".-->
    
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

<!--This script block defines a Vue.js component named CategoriasReto.

name: Specifies the name of the component, which is used for debugging purposes and to identify the component within Vue.js devtools.
data: This is a function that returns an object containing the component's data. In this case, it returns an object with a single property titulo set to the string 'Listado'. This data can be accessed and manipulated within the component's template. -->
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

<!--In this scoped style block:

h3: Styles all <h3> elements with a top margin of 30px.
.categories: Styles elements with the class categories with a top margin of 30px, a left margin of 50px, and left-aligned text.
.category-container: Styles elements with the class category-container. It sets a top margin of 20px, changes the text color to aliceblue, aligns the text to the center, sets a height of 70vh (70% of the viewport height), a width of 15vw (15% of the viewport width), a background color of #2C3538, and applies a box shadow for a visual effect. -->

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