import '../../style/style.css';
import React from "react"


class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            Estado: "Fechado",
            MenuButton: "Barras",
        }
    }
    //Muda o icone do menu de Barras para um X
    IconeXeBarras() {
        if(this.state.MenuButton === "Barras"){
            this.setState({
                MenuButton: "X",
            })
        }if(this.state.MenuButton === "X"){
            this.setState({
                MenuButton:"Barras",
            })
        }
    }
    //abre e fecha o menu
    AbrieFechar(){
        if(this.state.Estado === "Aberto"){
            this.setState({
                Estado: "Fechado",
            })   
            this.IconeXeBarras()
        }if(this.state.Estado === "Fechado"){
            this.setState({
                Estado: "Aberto"
            })
            this.IconeXeBarras()
        }
    }
    
    render() {
        return(
            <div className="menu">
                <button id='button-menu' className={this.state.MenuButton} onClick={this.AbrieFechar.bind(this)} >  
                    <div id='barra1Menu'/><div id='barra2Menu'/> 
                </button>
                <nav className={this.state.Estado}>
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