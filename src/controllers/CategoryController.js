import { categories } from '../models/Category';


class CategoryController {

  // Tüm kategorileri getir

  getAllCategories() {
    return categories;
  }

  // İsme göre kategori bul

  getCategoryByName(name) {
    return categories.find(cat => cat.name === name);
  }

  // ID'ye göre kategori bul

  getCategoryById(id) {
    return categories.find(cat => cat.id === id);
  }
}

// Tek bir instance oluştur

const categoryController = new CategoryController();
export default categoryController;