import { useState, useEffect } from 'react';
import { difficultyLevels } from '../../models/Recipe';
import categoryController from '../../controllers/CategoryController';

// Custom Hook - Array yönetimi için
function useArrayField(initialValue = ['']) {
  const [items, setItems] = useState(initialValue);

  const update = (index, value) => {
    setItems(prev => prev.map((item, i) => i === index ? value : item));
  };

  const add = () => setItems(prev => [...prev, '']);
  
  const remove = (index) => {
    if (items.length > 1) {
      setItems(prev => prev.filter((_, i) => i !== index));
    }
  };

  return { items, update, add, remove, setItems };
}

function RecipeForm({ recipe, onSave, onCancel }) {
  const categories = categoryController.getAllCategories().filter(cat => cat.name !== 'Tümü');

  const [formData, setFormData] = useState({
    title: '',
    category: 'Ana Yemek',
    ingredients: [''],
    steps: [''],
    cookingTime: 30,
    servings: 4,
    difficulty: 'Orta',
    imageUrl: ''
  });

  // Düzenleme modundaysa veriyi doldur

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title,
        category: recipe.category,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
        cookingTime: recipe.cookingTime,
        servings: recipe.servings,
        difficulty: recipe.difficulty,
        imageUrl: recipe.imageUrl || ''
      });
    }
  }, [recipe]);

  // Input değişikliği

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Malzeme değişikliği

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = value;
    setFormData(prev => ({ ...prev, ingredients: newIngredients }));
  };

  // Malzeme ekle

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, '']
    }));
  };

  // Malzeme sil

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      const newIngredients = formData.ingredients.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, ingredients: newIngredients }));
    }
  };

  // Adım değişikliği

  const handleStepChange = (index, value) => {
    const newSteps = [...formData.steps];
    newSteps[index] = value;
    setFormData(prev => ({ ...prev, steps: newSteps }));
  };


  // Adım ekle

  const addStep = () => {
    setFormData(prev => ({
      ...prev,
      steps: [...prev.steps, '']
    }));
  };

  // Adım sil

  const removeStep = (index) => {
    if (formData.steps.length > 1) {
      const newSteps = formData.steps.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, steps: newSteps }));
    }
  };

  // Form gönder

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Boş malzeme ve adımları temizle

    const cleanedData = {
      ...formData,
      ingredients: formData.ingredients.filter(ing => ing.trim() !== ''),
      steps: formData.steps.filter(step => step.trim() !== '')
    };

    onSave(cleanedData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {recipe ? 'Tarifi Düzenle' : 'Yeni Tarif Ekle'}
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
            
          {/* Başlık */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Tarif Adı *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="Örn: Mercimek Çorbası"
            />
          </div>

          {/* Kategori ve Zorluk */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Kategori *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Zorluk *</label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              >
                {difficultyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Süre ve Porsiyon */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Pişirme Süresi (dk) *</label>
              <input
                type="number"
                name="cookingTime"
                value={formData.cookingTime}
                onChange={handleChange}
                min="1"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Porsiyon (kişi) *</label>
              <input
                type="number"
                name="servings"
                value={formData.servings}
                onChange={handleChange}
                min="1"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          {/* Görsel URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Görsel URL (opsiyonel)</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Malzemeler */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Malzemeler *</label>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder={`Malzeme ${index + 1}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => removeIngredient(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  🗑️
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addIngredient}
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              + Malzeme Ekle
            </button>
          </div>

          {/* Yapılış Adımları */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Yapılış Adımları *</label>
            {formData.steps.map((step, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <span className="flex-shrink-0 w-8 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <textarea
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder={`Adım ${index + 1}`}
                  rows="2"
                  required
                />
                <button
                  type="button"
                  onClick={() => removeStep(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 h-10"
                >
                  🗑️
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addStep}
              className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              + Adım Ekle
            </button>
          </div>

          {/* Butonlar */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-medium"
            >
              {recipe ? '✏️ Güncelle' : '➕ Tarif Ekle'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition font-medium"
            >
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecipeForm;
