import '../App.css'

function Mensagem ({título, subtítulo}){
    return(
        <div>
            <h1>{título}</h1>
            <p>{subtítulo}</p>
        </div>
    );
}
export default Mensagem