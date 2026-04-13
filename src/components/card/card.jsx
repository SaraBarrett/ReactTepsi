import reactLogo from '../../assets/react.svg'
import './card.css'

export default function Card(props){
    return (<div className="c-card">
        <h3 >{props.title}</h3>
        <h6>{props.description}</h6>
        <img src={reactLogo} alt="" />
    </div>);
}