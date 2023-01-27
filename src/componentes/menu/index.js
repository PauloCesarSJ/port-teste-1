import '../../style/style.css';
import React from "react"
import ButtonBarrasX from '../buttonBarrasX/ButtonBarrasX';


class Menu extends React.Component {
    constructor(){
        super();
        this.state = {
            Estado: "Fechado",
            ButtonX: "Barras",
        }
    }
    //Muda o icone do menu de Barras para um X
    IconeXeBarras() {
        if(this.state.ButtonX === "Barras"){
            this.setState({
                ButtonX: "X",
            })
        }if(this.state.ButtonX === "X"){
            this.setState({
                ButtonX:"Barras",
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
                <ButtonBarrasX class={this.state.ButtonX} Click={this.AbrieFechar.bind(this)}/>
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