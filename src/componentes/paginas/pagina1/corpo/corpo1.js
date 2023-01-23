import TextoArea from "../../../textoareahome/textoAreaHome"
import "../../../../style/style.css"
import {MdKeyboardArrowDown} from "react-icons/md"
import React from "react"
import Rodape from "../../../rodape/rodape"

class Corpo1 extends React.Component {
    constructor(){
        super();
        this.state = {
            primeiro: "aparecer",
            segundo:"esconder",
            terceiro:"esconder",
        }
    }
SumireAparecer() {
    if(this.state.primeiro === "aparecer"){
        this.setState({
            primeiro: "esconder",
            segundo:"aparecer",
        })   
    }if(this.state.segundo === "aparecer"){
        this.setState({
            segundo:"esconder",
            terceiro:"aparecer",
        })
    }if(this.state.terceiro === "aparecer"){
        this.setState({
            primeiro: "aparecer",
            terceiro:"esconder",
        })
    }
}
render() {
        return (
        <>
            <div className={this.state.primeiro}>
            <TextoArea
                className="bemVindo"
                div="divTextoAreaHome"
                texto={
                    "Bem vindo me chamo Paulo"
                }
                class={
                    "primeiroTextoHome"
                }
                texto1={
                    "Este e meu portfólio, sou um web devoleper junior"
                }
                class1={
                    "segundoTextoHome"
                }
                texto2={
                    <a href="sobreMim">Sobre mim</a>
                }
                class3={
                    "esconder"
                }
            />
            </div>
            <div className={this.state.segundo}>
            <TextoArea
                div="divTextoAreaHome"
                texto={
                    "Mostrando o que sei fazer"
                }
                class={
                    "primeiroTextoHome"
                }
                texto1={
                    "Um Mostruario onde exponho meus projetos, tanto de estudo quando de trabalho"
                }
                class1={
                    "segundoTextoHome"
                }
                texto2={
                    <a href="projetos">PROJETOS</a>
                }
                class3={
                    "esconder"
                }
            />
            </div>
            <div className={this.state.terceiro}>
            <TextoArea
                div="divTextoAreaHome"
                texto={
                    "Fazendo contato"
                }
                class={
                    "primeiroTextoHome"
                }
                texto1={
                    "Não e necessário fazer desenhos em plantações, basta clicar no botão abaixo para me contatar"
                }
                class1={
                    "segundoTextoHome"
                }
                texto2={
                    <a href="contato">CONTATO</a>
                }
                class3={
                    "esconder"
                }
            />
            </div>
           <button className="controleHome" onClick={this.SumireAparecer.bind(this)}><MdKeyboardArrowDown size={100}/></button> 
           <Rodape classSecundaria="rodapeHome"/>    
        </>
    )
}
}
export default Corpo1