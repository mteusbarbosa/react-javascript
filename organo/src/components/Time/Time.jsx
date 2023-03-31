import "./Time.css";

export default function Time(props) {
  const { nome, corPrimaria, corSecundaria } = props;
  return (
    <>
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      </section>
    </>
  );
}
