import categoryController from '../../controllers/CategoryController';



function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = categoryController.getAllCategories();

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.name)}
          className={`px-4 py-2 rounded-full font-medium transition ${
            selectedCategory === category.name
              ? 'bg-orange-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <span className="mr-1">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;