import { useState } from 'react'
import './RecipeApp.css'
import Recipe from './components/Recipe'

function RecipeApp() {

  return (
    <div className="recipeApp">
      <h1>Recipe App</h1>
      <Recipe 
      title="Pasta"
      timeToCook="15 mins"
      ingredients={['flour', 'eggs', 'salt', 'water']}
      />
    </div>
  )
};

export default RecipeApp
