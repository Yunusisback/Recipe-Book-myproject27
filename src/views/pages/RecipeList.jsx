import { useState, useEffect } from 'react';
import recipeController from '../../controllers/RecipeController';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import RecipeCard from '../components/RecipeCard';
import RecipeDetail from '../components/RecipeDetail';
import RecipeForm from '../components/RecipeForm';



function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // İlk yüklemede tarifleri getir

  useEffect(() => {
    loadRecipes();
  }, []);

  // Tarifleri yükle

  const loadRecipes = () => {
    const allRecipes = recipeController.getAllRecipes();
    setRecipes(allRecipes);
    setFilteredRecipes(allRecipes);
  };

  // Kategori değiştiğinde filtrele

  useEffect(() => {
    filterRecipes();
  }, [selectedCategory, searchTerm, recipes]);

  // Filtreleme

  const filterRecipes = () => {
    let result = recipes;

    // Kategoriye göre filtrele

    if (selectedCategory !== 'Tümü') {
      result = recipeController.getRecipesByCategory(selectedCategory);
    }

    // Arama terimine göre filtrele

    if (searchTerm.trim() !== '') {
      result = result.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredRecipes(result);
  };

  // Tarif detayını göster

  const handleViewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Tarif sil

  const handleDeleteRecipe = (id) => {
    if (window.confirm('Bu tarifi silmek istediğinizden emin misiniz?')) {
      recipeController.deleteRecipe(id);
      loadRecipes();
    }
  };

  // Favori değiştir

  const handleToggleFavorite = (id) => {
    recipeController.toggleFavorite(id);
    loadRecipes();
  };

  // Yeni tarif ekle modalını aç

  const handleAddRecipe = () => {
    setEditingRecipe(null);
    setIsFormOpen(true);
  };

  // Tarif düzenle

  const handleEditRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setSelectedRecipe(null);
    setIsFormOpen(true);
  };

  // Tarif kaydet

  const handleSaveRecipe = (recipeData) => {
    if (editingRecipe) {

      // Güncelle
      recipeController.updateRecipe(editingRecipe.id, recipeData);
    } else {

      // Yeni ekle
      recipeController.addRecipe(recipeData);
    }
    setIsFormOpen(false);
    setEditingRecipe(null);
    loadRecipes();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">

{/* Header */}
<header className="bg-white shadow-md sticky top-0 z-40">
  <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Logo/Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-3xl shadow-lg">
          🍳
        </div>
        {/* Başlık */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Mutfağım
          </h1>
          <p className="text-gray-600 text-sm mt-0.5">Lezzetli tariflerin dijital evi</p>
        </div>
      </div>
      <button
        onClick={handleAddRecipe}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition font-medium flex items-center gap-2 shadow-md"
      >
        <span className="text-xl">➕</span>
        Yeni Tarif
      </button>
    </div>
  </div>
</header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">

        {/* Arama ve Filtreleme */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Favori Tarifler Bölümü */}
        {recipes.filter(r => r.isFavorite).length > 0 && (
          <div className="mb-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>❤️</span>
              Favori Tariflerim
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recipes
                .filter(r => r.isFavorite)
                .slice(0, 4)
                .map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => handleViewRecipe(recipe)}
                    className="cursor-pointer bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition"
                  >
                    <div className="h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-2 flex items-center justify-center text-4xl">
                      {recipe.imageUrl ? (
                        <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        '🍽️'
                      )}
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm truncate">{recipe.title}</h4>
                    <p className="text-xs text-gray-600">{recipe.category}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Tarif Sayısı */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-bold text-gray-800">{filteredRecipes.length}</span> tarif bulundu
          </p>
        </div>

        {/* Tarif Kartları */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onView={handleViewRecipe}
                onDelete={handleDeleteRecipe}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🔍</p>
            <p className="text-2xl font-bold text-gray-800 mb-2">Tarif bulunamadı</p>
            <p className="text-gray-600">Arama kriterlerinizi değiştirmeyi deneyin</p>
          </div>
        )}
      </main>

      {/* Modallar (Açılır Pencereler) */}
      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onEdit={handleEditRecipe}
        />
      )}

      {isFormOpen && (
        <RecipeForm
          recipe={editingRecipe}
          onSave={handleSaveRecipe}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingRecipe(null);
          }}
        />
      )}
    </div>
  );
}

export default RecipeList;