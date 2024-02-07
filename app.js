const app = Vue.createApp({
    data() {
      return {
        recipes: [],
        newRecipe: {
          name: '',
          ingredients: '',
          preparation: '',
          time: 0,
          people: 0
        }
      };
    },
    methods: {
      addRecipe() {
        if (this.validateForm()) {
          this.recipes.push({
            id: Date.now(),
            ...this.newRecipe
          });
          this.clearForm();
          this.saveToLocalStorage();
        } else {
          alert('Veuillez remplir tous les champs.');
        }
      },
      deleteRecipe(id) {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        this.saveToLocalStorage();
      },
      validateForm() {
        return Object.values(this.newRecipe).every(value => value !== '');
      },
      clearForm() {
        this.newRecipe = {
          name: '',
          ingredients: '',
          preparation: '',
          time: 0,
          people: 0
        };
      },
      saveToLocalStorage() {
        localStorage.setItem('recipes', JSON.stringify(this.recipes));
      },
      loadFromLocalStorage() {
        const storedRecipes = localStorage.getItem('recipes');
        this.recipes = storedRecipes ? JSON.parse(storedRecipes) : [];
      }
    },
    mounted() {
      this.loadFromLocalStorage();
    }
  });
  
  
  app.mount('#app');
  