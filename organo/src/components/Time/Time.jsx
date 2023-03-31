import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

export default function Time(props) {
  const { nome, corPrimaria, corSecundaria } = props;
  return (
    <>
      {props.colaboradores.length > 0 && (
        <section className="time" style={{ backgroundColor: corSecundaria }}>
          <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
          <div className="colaboradores">
            {props.colaboradores.map((item) => (
              <Colaborador
                key={item}
                nome={item.nome}
                cargo={item.cargo}
                imagem={item.imagem}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
