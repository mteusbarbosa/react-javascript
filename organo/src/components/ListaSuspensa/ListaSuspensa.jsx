import "./ListaSuspensa.css"

export default function ListaSuspensa(props){
    return <div className="lista-suspensa">
        <label htmlFor="">{props.label}</label>
        <select onChange={event => props.aoAlterado(event.target.value)} >
            {props.itens.map(item => {
                return <option key={item} value={item} >{item}</option>
            })}
        </select>
    </div>
}