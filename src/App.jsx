import CardContexto from "./UsoDeContexto/CardContexto"
import DatosContexto from "./UsoDeContexto/DatosContexto"

function App() {
  return (
    <DatosContexto>
      <CardContexto />
    </DatosContexto>
  )
}

export default App
