import "./ListaSuspensa.css"

export default function ListaSuspensa(props){
    return <div className="lista-suspensa">
        <label htmlFor="">{props.label}</label>
        <select name="" id="">
            {props.itens.map(item => {
                return <option key={item}>{item}</option>
            })}
        </select>
    </div>
}