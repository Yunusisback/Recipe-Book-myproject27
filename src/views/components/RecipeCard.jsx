function RecipeCard({ recipe, onView, onDelete, onToggleFavorite }) {


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">

      {/* Görsel */}

      <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-6xl">
        {recipe.imageUrl ? (
          <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover" />
        ) : (
          '🍽️'
        )}
      </div>

      {/* İçerik */}
      <div className="p-4">

        {/* Başlık ve favori */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className="text-2xl"
          >
            {recipe.isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Kategori */}
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full mb-3">
          {recipe.category}
        </span>

        {/* Bilgiler */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span>⏱️ {recipe.cookingTime} dk</span>
          <span>👥 {recipe.servings} kişilik</span>
          <span className={`font-medium ${
            recipe.difficulty === 'Kolay' ? 'text-green-600' :
            recipe.difficulty === 'Orta' ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Butonlar */}
        <div className="flex gap-2">
          <button
            onClick={() => onView(recipe)}
            className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Detayları Gör
          </button>
          <button
            onClick={() => onDelete(recipe.id)}
            className="px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;