export const categories = [
  { id: 1, name: 'Tümü', icon: '🍽️' },
  { id: 2, name: 'Çorba', icon: '🍲' },
  { id: 3, name: 'Ana Yemek', icon: '🍖' },
  { id: 4, name: 'Salata', icon: '🥗' },
  { id: 5, name: 'Tatlı', icon: '🍰' },
  { id: 6, name: 'İçecek', icon: '🥤' },
  { id: 7, name: 'Aperatif', icon: '🧀' }
];



// İsme göre kategori bul

export const getCategoryByName = (name) => {
  return categories.find(cat => cat.name === name);
};