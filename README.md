#  Recipe Finder

A React + TypeScript web application that helps busy professionals find recipes based on ingredients they have at home.

##  About
Built for **Taylor**, a busy professional who needs quick meal ideas. Simply search by ingredient (e.g., "chicken", "rice", "tomato") to discover recipes.

##  Features
- Search recipes by ingredient
- Real-time loading states
- Error handling
- Responsive design (mobile to desktop)
- Recipe cards with images

##  Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- TheMealDB API

##  Installation

Install dependencies
npm install

Run development server
npm run dev
Build for production
npm run build


##  Project Structure

src/
├── assets/services/
│ └── mealService.ts # API calls
├── types/
│ └── meal.ts # TypeScript types
└── App.tsx # Main component

## API Integration

**Service Layer:**
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const filterByIngredient = async (ingredient: string) => {
const response = await fetch(${BASE_URL}/filter.php?i=${ingredient});
if (!response.ok) throw new Error('Failed to fetch meals');
return response.json();
};
**Types:**
export interface Meal {
idMeal: string;
strMeal: string;
strMealThumb: string;
}


## Usage

1. Enter an ingredient in the search box
2. Click "Search" or press Enter
3. View recipe results in grid layout







