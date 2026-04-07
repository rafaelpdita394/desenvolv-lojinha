const BASE_URL = 'https://fakestoreapi.com';

// Dados locais de fallback caso a API esteja offline
const mockProducts = [
  { id: 1, title: "Fjallraven Backpack", price: 109.95, category: "men's clothing", image: "https://fakestoreapi.com/img/81fAn-jTRDL._AC_UX679_.jpg", rating: { rate: 3.9, count: 120 }, description: "Your perfect pack for everyday use and walks in the forest." },
  { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.30, category: "men's clothing", image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", rating: { rate: 4.1, count: 259 }, description: "Slim-fitting style, contrast raglan long sleeve." },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", rating: { rate: 4.7, count: 500 }, description: "Great outerwear jacket for Spring/Autumn/Winter." },
  { id: 4, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", rating: { rate: 2.1, count: 430 }, description: "The color could be slightly different on screen." },
  { id: 5, title: "John Hardy Women's Dragon Bracelet", price: 695.00, category: "jewelery", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg", rating: { rate: 4.6, count: 400 }, description: "From our Legends Collection." },
  { id: 6, title: "Solid Gold Petite Micropave", price: 168.00, category: "jewelery", image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_FMwebp_QL65_.jpg", rating: { rate: 3.9, count: 70 }, description: "Satisfaction Guaranteed. Return or exchange within 30 days." },
  { id: 7, title: "White Gold Plated Princess", price: 9.99, category: "jewelery", image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg", rating: { rate: 3.0, count: 400 }, description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring." },
  { id: 8, title: "WD 2TB External Hard Drive", price: 64.00, category: "electronics", image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", rating: { rate: 3.3, count: 203 }, description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers." },
  { id: 9, title: "SanDisk SSD PLUS 1TB Internal SSD", price: 109.00, category: "electronics", image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", rating: { rate: 2.9, count: 470 }, description: "Easy upgrade for faster boot up, shutdown, application load." },
  { id: 10, title: "Samsung 49-Inch CHG90 Curved Monitor", price: 999.99, category: "electronics", image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", rating: { rate: 2.2, count: 140 }, description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR." },
  { id: 11, title: "BIYLACLESEN Women's Snowboard Jacket", price: 56.99, category: "women's clothing", image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg", rating: { rate: 2.6, count: 235 }, description: "Note: The Jackets is US standard size." },
  { id: 12, title: "Lock and Love Women's Faux Leather Jacket", price: 29.95, category: "women's clothing", image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg", rating: { rate: 2.9, count: 340 }, description: "100% POLYURETHANE(shell) 100% POLYESTER(lining)." },
  { id: 13, title: "Rain Jacket Women Windbreaker", price: 39.99, category: "women's clothing", image: "https://fakestoreapi.com/img/71HblAHs1xL._AC_UY879_-2.jpg", rating: { rate: 3.8, count: 679 }, description: "Lightweight perfect for trip or casual wear." },
  { id: 14, title: "MBJ Women's Solid Short Sleeve Boat Neck V", price: 9.85, category: "women's clothing", image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", rating: { rate: 4.7, count: 130 }, description: "95% RAYON 5% SPANDEX, Made in USA or Imported." },
  { id: 15, title: "Opna Women's Short Sleeve Moisture Tunic", price: 7.95, category: "women's clothing", image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg", rating: { rate: 4.5, count: 146 }, description: "100% Polyester, Machine wash." },
  { id: 16, title: "DANVOUY Womens T Shirt Casual Cotton Short", price: 12.99, category: "women's clothing", image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", rating: { rate: 3.6, count: 145 }, description: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve." },
];

export async function fetchProducts() {
  try {
    const res = await fetch(BASE_URL + '/products', {
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) throw new Error('API indisponível');
    return await res.json();
  } catch (error) {
    console.warn('API offline, usando dados locais:', error.message);
    return mockProducts;
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(BASE_URL + '/products/categories', {
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) throw new Error('API indisponível');
    return await res.json();
  } catch {
    return ["electronics", "jewelery", "men's clothing", "women's clothing"];
  }
}

export async function fetchProductById(id) {
  try {
    const res = await fetch(BASE_URL + '/products/' + id, {
      signal: AbortSignal.timeout(5000)
    });
    if (!res.ok) throw new Error('API indisponível');
    return await res.json();
  } catch {
    return mockProducts.find(p => p.id === Number(id)) || null;
  }
}
