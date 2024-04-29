<!-- This template block defines the structure of a component responsible for displaying categories.

It contains a <div> element with the class category-container, which serves as a container for the category content.
Inside the container, there's an <h3> element displaying the text "Categorías +", which likely indicates that users can click on it to view more categories.
Below the <h3> element, there's another <div> element with the class categories, containing <p> elements for each category, such as "Mesas", "Lámparas", "Sillas", and "Sofás".-->
    
    <template>
        <div class="category-container">
          <h3>Categorías</h3>         
          <div class="categories">
            <p>Mesas</p>
            <p>Lámparas</p>
            <p>Sillas</p>
            <p>Sofás</p>
          </div>
         <!-- Logout and Settings buttons -->
          <div class="buttons">
            <button @click="logout">Cerrar sesión</button>
            <button @click="goToSettings">Configuración</button>
          </div>
        </div>
      </template>

<!--This script block defines a Vue.js component named CategoriasReto.
This code defines a Vue.js component named CategoriasReto. 
It includes a data object with a property titulo, and two methods logout() and goToSettings(). 
Each method contains comments explaining its purpose.
-->
<script>

export default {
    
    name:'CategoriasReto',
    data(){
        return {
            titulo:'Listado'
        }
    },
    methods: {
    logout() {
      // Logic for logging out
      console.log('Cerrar sesión');
    },
    goToSettings() {
      // Logic for navigating to the settings page
      console.log('Ir a configuración');
    }
  }
}
</script>

<!--In this scoped style block:
This code defines the styles for the scoped component. 
It includes styling for headings, category container, categories, buttons, and their hover states.
 Each section is documented with comments indicating its purpose and usage.
-->

<style scoped>
    h3{
        margin-top: 30px;
    }
    /* Styles for your categories container */
.category-container {
  margin-top: 20px;
  color: aliceblue;
  text-align: center;
  height: 70vh;
  width: 15vw;
  background-color: #2C3538;
  box-shadow: 4px 8px 58px -6px rgba(0,0,0,0.75);
  -webkit-box-shadow: 4px 8px 58px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 4px 8px 58px -6px rgba(0,0,0,0.75);
  display: flex;
  flex-direction: column;
}

.categories {
  flex: 1; /* Adjusts the size of the menu to fill the remaining space */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligns the elements to the start of the container */
  padding-left: 20px; /* Adds padding to the left so the text isn't flush against the edge */

}

.categories p {
  margin: 0; 
  margin-bottom: 13px; 
  margin-top: 10px; 

}

/* Styles for the buttons */
.buttons {
  margin-top: 20px;
}

.buttons button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px; 

}

.buttons button:last-child {
  margin-bottom: 10; 
}
.buttons button:hover {
  background-color: #2980b9;
}
</style>