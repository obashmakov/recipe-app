import Chat from '../components/Chat'
import Recipe from '../components/Recipe/inxed'
import Recipes from '../components/Recipes/indes'

const getComponent = (componentToRender) => {
  if (componentToRender.title === 'chat') {
    return <Chat />
  } else if (componentToRender.title === 'recipes') {
    return <Recipes />
  } else if (componentToRender.title === 'recipe') {
    return <Recipe recipe={componentToRender.recipeData} />
  }
}

export default getComponent
