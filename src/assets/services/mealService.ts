const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const filterByIngredient = async (ingredient: string) => {
  const response = await fetch(`${BASE_URL}/filter.php?i=${ingredient}`);
  if (!response.ok) throw new Error('Failed to fetch meals');
  return response.json();
};

export const getMealById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  if (!response.ok) throw new Error('Failed to fetch meal details');
  return response.json();
};

export const searchByName = async (name: string) => {
  const response = await fetch(`${BASE_URL}/search.php?s=${name}`);
  if (!response.ok) throw new Error('Failed to search meals');
  return response.json();
};
