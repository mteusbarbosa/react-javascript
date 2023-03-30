import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspenss/ListaSuspensa";
import "./Formulario.css";

export default function Formulario() {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];

  return (
    <>
      <section className="formulario">
        <form>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto label="Nome" placeholder="Digite seu nome" />
          <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da imagem"
          />
          <ListaSuspensa label="Time" itens={times} />
        </form>
      </section>
    </>
  );
}
