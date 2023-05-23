import { useContext } from "react";
import Loader from "./components/Loader";
import { ComponentContext } from "./providers/ComponentsProvider";
import getComponent from "./utils/getComponent";

function App() {
  const { component, loading } = useContext(ComponentContext)

  if (loading) return (
    <div className="App" style={{ alignItems: 'center' }}>
      <Loader />
    </div>
  )

  return (
    <div className="App">
      {getComponent(component)}
    </div>
  );
}

export default App;
