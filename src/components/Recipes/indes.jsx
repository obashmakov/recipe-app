import Button from '../../containers/Button'
import RecipesList from './RecipesList'
import recipesMock from '../../mocks/recipesMock.json'
import '../../styles/recipes.scss'

const Recipes = () => {
  return (
    <div className="recipes">
      <h1 className="recipes__title">Here is the list of recipes:</h1>
      <RecipesList recipes={recipesMock.recipes} />
      <div className="actions">
        <Button title="ADD PRODUCTS TO MY LIST" />
      </div>
    </div>
  )
}

export default Recipes
