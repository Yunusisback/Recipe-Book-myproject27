import { 
    faUtensils, 
    faBowlFood, 
    faPlateWheat, 
    faLeaf, 
    faCakeCandles, 
    faMugSaucer, 
    faCheese 
} from '@fortawesome/free-solid-svg-icons';

export const categories = [
    { id: 1, name: 'Tümü', icon: faUtensils },
    { id: 2, name: 'Çorba', icon: faBowlFood }, 
    { id: 3, name: 'Ana Yemek', icon: faPlateWheat },
    { id: 4, name: 'Salata', icon: faLeaf }, 
    { id: 5, name: 'Tatlı', icon: faCakeCandles },
    { id: 6, name: 'İçecek', icon: faMugSaucer },
    { id: 7, name: 'Aperatif', icon: faCheese }
];


// İsme göre kategori bul
export const getCategoryByName = (name) => {
    return categories.find(cat => cat.name === name);
};
