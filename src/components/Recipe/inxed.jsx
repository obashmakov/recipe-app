import { useContext } from 'react'
import { ComponentContext } from '../../providers/ComponentsProvider'
import Button from '../../containers/Button'
import '../../styles/recipes.scss'

const Recipe = ({ recipe }) => {
  const { setComponent } = useContext(ComponentContext)
  const handleBack = () => {
    setComponent({
      title: 'recipes',
      recipeData: null,
    })
  }

  return (
    <div className="recipe">
      <h1 className="recipe__title">{recipe.title}</h1>
      <div className="recipe__info">
        <p>Ingridients:</p>
        <ul className="recipe__list">
          {recipe.ingridients.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="recipe__info">
        <p>Instructions:</p>
        <ol>
          {recipe.instructions.map(item => (
            <li>{item}</li>
          ))}
        </ol>
      </div>

      <Button title="< Back" handleSend={handleBack} />
    </div>
  )
}

export default Recipe
