import { useContext } from "react"
import { ComponentContext } from "../../providers/ComponentsProvider"

const RecipesList = ({ recipes }) => {
  const { setComponent, setLoading } = useContext(ComponentContext)
  const handleClick = (recipe) => {
    setComponent({
      title: 'recipe',
      recipeData: recipe,
    })
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <ul className="recipes__list">
      {recipes.map(recipe => (
        <li key={recipe.id} className="recipes__item">
          <input type="checkbox" />
          <button className="recipes__button" onClick={() => handleClick(recipe)}>
            {recipe.title}
            <span className="recipes__buttonIcon">{'>'}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default RecipesList
