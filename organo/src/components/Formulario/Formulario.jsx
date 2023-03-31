import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

export default function Formulario(props) {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];

  function handleFormSubmit(event) {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
  }

  return (
    <>
      <section className="formulario">
        <form onSubmit={handleFormSubmit}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto
            label="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <CampoTexto
            label="Cargo"
            placeholder="Digite seu cargo"
            valor={cargo}
            aoAlterado={(cargo) => setCargo(cargo)}
          />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            valor={imagem}
            aoAlterado={(imagem) => setImagem(imagem)}
          />
          <ListaSuspensa label="Time" itens={times} valor={time} aoAlterado={valor => setTime(valor)}/>
          <Botao>Criar card</Botao>
        </form>
      </section>
    </>
  );
}
