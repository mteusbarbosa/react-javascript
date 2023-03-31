import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Time from "./components/Time/Time";
import Rodape from "./components/Rodape/Rodape";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const times = [
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Sciense",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  function handleFormSubmit(event) {
    setColaboradores([...colaboradores, event]);
    console.log(colaboradores);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={handleFormSubmit}
        times={times.map((time) => time.nome)}
      />
      {times.map((time, idx) => {
        return (
          <Time
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            key={idx}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
        );
      })}
      <Rodape/>
    </div>
  );
}

export default App;
