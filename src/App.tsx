import { useState } from 'react';
import type { Meal } from './types/meal';
import { filterByIngredient } from './assets/services/mealService';


function App() {
  const [ingredient, setIngredient] = useState('');
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredient.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const data = await filterByIngredient(ingredient);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError('No recipes found for this ingredient');
      }
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-3">
             Recipe Finder
          </h1>
          <p className="text-xl text-gray-600">
            Find delicious recipes based on ingredients you have
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built for Taylor - A busy professional who loves cooking
          </p>
        </header>

        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
          <div className="flex gap-3 shadow-lg">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              placeholder="Enter ingredient (e.g., chicken, rice, tomato)"
              className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded-l-xl focus:outline-none focus:border-orange-500 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-r-xl hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition transform hover:scale-105"
            >
              {loading ? 'Searching...' : ' Search'}
            </button>
          </div>
        </form>

        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
            <p className="font-semibold"> {error}</p>
          </div>
        )}

        {meals.length > 0 && (
          <p className="text-center text-gray-600 mb-6">
            Found <span className="font-bold text-orange-600">{meals.length}</span> recipes
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {meal.strMeal}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {!loading && meals.length === 0 && !error && (
          <div className="text-center py-16">
           
            <p className="text-xl text-gray-500">
              Enter an ingredient to discover amazing recipes!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
