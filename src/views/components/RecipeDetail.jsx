function RecipeDetail({ recipe, onClose, onEdit }) {
  if (!recipe) return null;



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{recipe.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
            
          {/* Görsel */}
          <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-6 flex items-center justify-center text-8xl">
            {recipe.imageUrl ? (
              <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover rounded-lg" />
            ) : (
              '🍽️'
            )}
          </div>

          {/* Bilgiler */}
          <div className="flex items-center gap-6 mb-6 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-xl">⏱️</span>
              <span>{recipe.cookingTime} dakika</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">👥</span>
              <span>{recipe.servings} kişilik</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📊</span>
              <span className={`font-medium ${
                recipe.difficulty === 'Kolay' ? 'text-green-600' :
                recipe.difficulty === 'Orta' ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>

          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-6">
            {recipe.category}
          </span>

          {/* Malzemeler */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">🛒 Malzemeler</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Yapılışı */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">👨‍🍳 Yapılışı</h3>
            <ol className="space-y-3">
              {recipe.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Butonlar */}
          <div className="flex gap-3">
            <button
              onClick={() => onEdit(recipe)}
              className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium"
            >
              ✏️ Düzenle
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition font-medium"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;