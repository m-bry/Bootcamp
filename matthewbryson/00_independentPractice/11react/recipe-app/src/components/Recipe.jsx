
// I want to render a single Recipe

function Recipe(props) {
let {title, timeToCook, ingredients} = props;
//I want to get the props values out of the props object
//by using destructuring

let ingredientsList = ingredients.map(function(ingredient, index){
  return <li key={index}>{ingredient}</li>
})
    return (
      <div className="recipeApp">
        <h2>Recipe for {props.title}</h2>
        <p>Time to cook is estimated to be {timeToCook || 'unknown'}</p>
      </div>
    )
  }

  export default Recipe;