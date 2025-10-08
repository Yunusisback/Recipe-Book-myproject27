// Zorluk seviyeleri

export const difficultyLevels = ['Kolay', 'Orta', 'Zor'];



// Yeni tarif oluştur

export const createRecipe = (data) => {
  return {
    id: data.id || Date.now(),
    title: data.title,
    category: data.category,
    ingredients: data.ingredients, // dizi: ['2 su bardağı un', '1 çay bardağı su']
    steps: data.steps, // dizi: ['Hamuru yoğurun', 'Pişirin']
    cookingTime: data.cookingTime, // dakika olarak
    servings: data.servings, // kaç kişilik
    difficulty: data.difficulty, // 'Kolay' 'Orta' 'Zor'
    imageUrl: data.imageUrl || '',
    createdAt: new Date().toISOString(),
    isFavorite: false
  };
};


// Örnek tarifler

export const sampleRecipes = [
  {
    id: 1,
    title: 'Mercimek Çorbası',
    category: 'Çorba',
    ingredients: ['1 su bardağı kırmızı mercimek', '1 adet soğan', '2 yemek kaşığı un', '1 yemek kaşığı salça', '1 litre su', 'Tuz, karabiber'],
    steps: ['Mercimeği yıkayın ve süzün', 'Soğanı rendeleyin ve kavurun', 'Unu ve salçayı ekleyin', 'Suyu ve mercimeği ekleyip kaynatın', 'Yumuşayınca blenderdan geçirin'],
    cookingTime: 30,
    servings: 4,
    difficulty: 'Kolay',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 2,
    title: 'Köfte',
    category: 'Ana Yemek',
    ingredients: ['500gr kıyma', '1 adet soğan', '1 dilim bayat ekmek', '1 yumurta', 'Kimyon, pul biber, tuz'],
    steps: ['Ekmeği suda ıslatın ve sıkın', 'Tüm malzemeleri yoğurun', 'Köfte şekli verin', 'Izgara veya tavada pişirin'],
    cookingTime: 45,
    servings: 4,
    difficulty: 'Orta',
    imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 3,
    title: 'Çoban Salatası',
    category: 'Salata',
    ingredients: ['2 adet domates', '2 adet salatalık', '1 adet yeşil biber', '1 adet soğan', 'Maydanoz', 'Zeytinyağı, limon, tuz'],
    steps: ['Sebzeleri küp küp doğrayın', 'Maydanozu ince kıyın', 'Hepsini karıştırın', 'Zeytinyağı, limon ve tuz ekleyin'],
    cookingTime: 10,
    servings: 4,
    difficulty: 'Kolay',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 4,
    title: 'Sütlaç',
    category: 'Tatlı',
    ingredients: ['1 litre süt', '1 su bardağı pirinç', '1 su bardağı şeker', '1 paket vanilya', 'Tarçın'],
    steps: ['Pirinci haşlayın ve süzün', 'Sütü kaynatın', 'Pirinci ve şekeri ekleyin', 'Koyulaşana kadar pişirin', 'Vanilyayı ekleyip fırınlayın'],
    cookingTime: 60,
    servings: 6,
    difficulty: 'Orta',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
{
  id: 5,
  title: 'Limonata',
  category: 'İçecek',
  ingredients: ['4 adet limon', '1 litre su', '1 su bardağı şeker', 'Nane yaprakları', 'Buz'],
  steps: ['Limonları sıkın', 'Şekeri suda eritin', 'Limon suyunu ekleyin', 'Nane ve buz ekleyip servis yapın'],
  cookingTime: 5,
  servings: 4,
  difficulty: 'Kolay',
  imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500',
  createdAt: new Date().toISOString(),
  isFavorite: false
},
  {
    id: 6,
    title: 'Sigara Böreği',
    category: 'Aperatif',
    ingredients: ['1 paket yufka', '200gr beyaz peynir', 'Maydanoz', 'Yumurta', 'Sıvı yağ'],
    steps: ['Peyniri ve maydanozu karıştırın', 'Yufkaları kesin', 'İçi koyup rulo yapın', 'Yağda kızartın'],
    cookingTime: 30,
    servings: 6,
    difficulty: 'Orta',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 7,
    title: 'Mantı',
    category: 'Ana Yemek',
    ingredients: ['2 su bardağı un', '1 yumurta', '300gr kıyma', 'Yoğurt', 'Sarımsak', 'Tereyağı'],
    steps: ['Hamuru yoğurun ve açın', 'Kıymayı yerleştirip kapatın', 'Haşlayın', 'Yoğurt ve tereyağ ile servis edin'],
    cookingTime: 90,
    servings: 4,
    difficulty: 'Zor',
    imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 8,
    title: 'Ezogelin Çorbası',
    category: 'Çorba',
    ingredients: ['1 su bardağı kırmızı mercimek', '1/2 su bardağı bulgur', '1 yemek kaşığı salça', '1 adet soğan', 'Nane, pul biber'],
    steps: ['Mercimek ve bulguru kaynatın', 'Soğanı kavurun', 'Salçayı ekleyin', 'Hepsini karıştırıp pişirin'],
    cookingTime: 35,
    servings: 4,
    difficulty: 'Kolay',
    imageUrl: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 9,
    title: 'Baklava',
    category: 'Tatlı',
    ingredients: ['1 paket baklavalik yufka', '200gr ceviz', '200gr tereyağı', '2 su bardağı şeker', 'Su'],
    steps: ['Yufkaları yağlayıp dizin', 'Cevizi serpin', 'Fırında pişirin', 'Şerbetini dökün'],
    cookingTime: 60,
    servings: 8,
    difficulty: 'Zor',
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 10,
    title: 'Türk Kahvesi',
    category: 'İçecek',
    ingredients: ['1 fincan su', '1 kahve kaşığı Türk kahvesi', 'Şeker (isteğe göre)'],
    steps: ['Suyu cezvede ısıtın', 'Kahve ve şekeri ekleyin', 'Köpürünce ateşten alın', 'Tekrar kaynatıp servis edin'],
    cookingTime: 5,
    servings: 1,
    difficulty: 'Kolay',
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 11,
    title: 'Patlıcan Kızartma',
    category: 'Aperatif',
    ingredients: ['3 adet patlıcan', 'Sıvı yağ', 'Yoğurt', 'Sarımsak', 'Domates sosu'],
    steps: ['Patlıcanları dilimleyin ve tuzlayın', 'Yağda kızartın', 'Yoğurt ve sarımsak karışımı hazırlayın', 'Domates sosu ile servis edin'],
    cookingTime: 25,
    servings: 4,
    difficulty: 'Kolay',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  },
  {
    id: 12,
    title: 'Menemen',
    category: 'Ana Yemek',
    ingredients: ['4 adet yumurta', '3 adet domates', '2 adet sivri biber', 'Zeytinyağı', 'Tuz, karabiber'],
    steps: ['Biberleri kavurun', 'Domatesleri ekleyin', 'Yumurtaları kırın', 'Karıştırarak pişirin'],
    cookingTime: 15,
    servings: 2,
    difficulty: 'Kolay',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500',
    createdAt: new Date().toISOString(),
    isFavorite: false
  }
];