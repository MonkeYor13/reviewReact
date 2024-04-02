import Dormitorio from "./UsoDeContexto/CardContexto"
import DatosContexto from "./UsoDeContexto/DatosContexto"
function App() {
  return (
    <DatosContexto>
      <Dormitorio />
    </DatosContexto>
  )
}

export default App
