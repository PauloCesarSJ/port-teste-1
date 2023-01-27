import "../../style/style.css";


const ButtonBarrasX = (props) => {

    return(
        <div>
            <button id="Button-especial" className={props.class} onClick={props.Click}>
                <div id='barra1Menu'/><div id='barra2Menu'/> 
            </button>
        </div>
    )
}

export default ButtonBarrasX