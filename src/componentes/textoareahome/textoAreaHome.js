

const TextoArea = (props) => {


    return (
        <div className={props.div}>
            <p className= { `texto ${props.class}` }>{props.texto}</p>
            <p className= { `texto ${props.class1}` }>{props.texto1}</p>


            <button onClick={props.click1} className={`button ${props.class2}`}>{props.texto2}</button>
            <button onClick={props.click2} className={`button ${props.class3}`}>{props.texto3}</button>
        </div>
    )
}

export default TextoArea