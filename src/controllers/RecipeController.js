import { createRecipe, sampleRecipes } from '../models/Recipe';



class RecipeController {
  constructor() {

    // Başlangıç tarifleri

    this.recipes = [...sampleRecipes];
  }

  // Tüm tarifleri getir

  getAllRecipes() {
    return [...this.recipes]; 
  }

  // ID'ye göre tarif bul

  getRecipeById(id) {
    return this.recipes.find(recipe => recipe.id === id);
  }

  // Kategoriye göre filtrele
  
  getRecipesByCategory(category) {
    if (category === 'Tümü') {
      return [...this.recipes];
    }
    return this.recipes.filter(recipe => recipe.category === category);
  }

  // Arama yap

  searchRecipes(searchTerm) {
    const term = searchTerm.toLowerCase();
    return this.recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(term) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(term))
    );
  }

  // Yeni tarif ekle

  addRecipe(recipeData) {
    const newRecipe = createRecipe(recipeData);
    this.recipes.push(newRecipe);
    return newRecipe;
  }

  // Tarif güncelle

  updateRecipe(id, updatedData) {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
      this.recipes[index] = { ...this.recipes[index], ...updatedData };
      return this.recipes[index];
    }
    return null;
  }

  // Tarif sil

  deleteRecipe(id) {
    const index = this.recipes.findIndex(recipe => recipe.id === id);
    if (index !== -1) {
      this.recipes.splice(index, 1);
      return true;
    }
    return false;
  }

  // Favori durumunu değiştir 

  toggleFavorite(id) {
    const recipe = this.recipes.find(recipe => recipe.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      console.log(`Tarif ${recipe.title} favorilere ${recipe.isFavorite ? 'eklendi' : 'çıkarıldı'}`);
      return recipe;
    }
    return null;
  }
}

// Tek bir instance oluştur 

const recipeController = new RecipeController();
export default recipeController;