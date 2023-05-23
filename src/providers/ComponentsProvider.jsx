import { createContext, useState } from "react"

export const ComponentContext = createContext(null)

const ComponentsProvider = ({ children }) => {
  const [currentComponent, setCurrentComponent] = useState({
    title: 'chat',
    recipeData: null,
  })
  const [loading, setLoading] = useState(false)

  const components = {
    component: currentComponent,
    setComponent: setCurrentComponent,
    loading,
    setLoading,
  }

  return (
    <ComponentContext.Provider value={components}>
      {children}
    </ComponentContext.Provider>
  )
}

export default ComponentsProvider