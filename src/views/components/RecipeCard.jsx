import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCircleUser, faTrashCan } from '@fortawesome/free-solid-svg-icons'; 

function RecipeCard({ recipe, onView, onDelete, onToggleFavorite }) {
  return (

    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">

      {/* Görsel Alanı */}

      <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-6xl">
        {recipe.imageUrl ? (
          <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-full object-cover" />
        ) : (
          '🍽️'
        )}
      </div>

      {/* İçerik Alanı */}

      <div className="p-4">

        {/* Başlık ve Favori Butonu */}

        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{recipe.title}</h3>
          <button
            onClick={() => onToggleFavorite(recipe.id)}
            className="text-2xl"
            aria-label={recipe.isFavorite ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
          >
            {recipe.isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Kategori Etiketi */}
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full mb-3">
          {recipe.category}
        </span>

        {/* Bilgiler (Süre, Kişi Sayısı, Zorluk) */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          {/* Süre ikonu */}
          <span>
            <FontAwesomeIcon icon={faClock} className="mr-1 text-gray-500" />
            {recipe.cookingTime} dk
          </span>
          {/* Kişi ikonu */}
          <span>
            <FontAwesomeIcon icon={faCircleUser} className="mr-1 text-gray-500" /> 
            {recipe.servings} kişilik
          </span>
          <span className={`font-medium ${
            recipe.difficulty === 'Kolay' ? 'text-green-600' :
            recipe.difficulty === 'Orta' ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {recipe.difficulty}
          </span>
        </div>

        {/* Aksiyon Butonları */}

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
            aria-label="Sil"
          >
            <FontAwesomeIcon icon={faTrashCan} /> {/* yeni çöp kutusu ikonu */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
