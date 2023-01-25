import '../../style/style.css';
import {FiMenu} from "react-icons/fi"
import React from "react"
import { Alert } from 'bootstrap';


class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            primeiro: "Menu",
            segundo:"Fechar",
        }
    }
    SumireAparecer(){
        if(this.state.primeiro === "Menu"){
            this.setState({
                primeiro: "Fechar",
                segundo:"Menu",
            })   
        }if(this.state.segundo === "Menu"){
            this.setState({
                segundo:"Fechar",
                primeiro:"Menu",
            })
        }
    }
    Foi(){
        alert("foi")
    }
    render() {
        return(
            <div className="menu">
                <button id='button-menu'><div id='barra1Menu'/><div id='barra2Menu'/><div id='barra3Menu'/></button>
                <nav >
                    <a
                        href="/">HOME 
                    </a>
                    <a
                        href='sobreMim'>SOBRE MIM                
                    </a>
                    <a 
                        href="projetos">PROJETOS
                    </a>
                    <a 
                        href="contato">CONTATOS
                    </a>
                </nav>
            </div>
        )
    } 
}

export default Menu