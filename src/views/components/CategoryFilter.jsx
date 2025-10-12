import categoryController from '../../controllers/CategoryController';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = categoryController.getAllCategories();

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.name)}
          className={`
            px-4 py-2 rounded-full font-medium transition 
            flex items-center justify-center 
            ${
              selectedCategory === category.name
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }
          `}
        >
          <FontAwesomeIcon icon={category.icon} className="mr-2" />
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

