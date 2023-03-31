import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Time from "./components/Time/Time";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  function handleFormSubmit(event) {
    setColaboradores([...colaboradores, event]);
    console.log(colaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={handleFormSubmit} />
      <Time nome="Programação"/>
    </div>
  );
}

export default App;
