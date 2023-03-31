import "./CampoTexto.css";

export default function CampoTexto(props) {
  
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} value={props.valor} onChange={event => props.aoAlterado(event.target.value)} required />
    </div>
  );
}
