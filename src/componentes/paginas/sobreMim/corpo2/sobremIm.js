import '../../../../style/style.css';
import Rodape from '../../../rodape/rodape';
import React from 'react';
class Corpo2 extends  React.Component {
    constructor(){
        super();
        this.state = {
            Button1:"Barras",
            Button2:"Barras",
            Button3:"Barras",
        }
    }
    IconeXeBarras1() {
        if(this.state.Button1 === "Barras"){
            this.setState({
                Button1: "X",
            })
        }if(this.state.Button1 === "X"){
            this.setState({
                Button1:"Barras",
            })
        }
    }   
    IconeXeBarras2() {
            if(this.state.Button2 === "Barras"){
                this.setState({
                    Button2: "X",
                })
            }if(this.state.Button2 === "X"){
                this.setState({
                    Button2:"Barras",
                })
        }
    }
    IconeXeBarras3(){
            if(this.state.Button3 === "Barras"){
                this.setState({
                    Button3: "X",
                })
            }if(this.state.Button3 === "X"){
                this.setState({
                    Button3:"Barras",
                })
            }
    }
    render() {
        return (
            <div className="quadroSobreMIm">
            <div>
                    <div>
                        <div>  
                            <h2>QUEM SOU</h2>
                        </div>
                        <p >
                                Ola eu sou Paulo Cesar, tenho 18 anos, sou um jovem, web developer júnior.
                                Sou apaixonado por tecnologia. Minha história com tecnologia começa aos meus 14 anos
                                onde meu professo de física me apresentando um Arduíno, usando c++ para fazer o básico,
                                ali eu me apaixonei pela área da tecnologia, passei alguns anos pulando de língua em língua
                                ate encontrar uma que permitisse a junção de tecnologia e artes foi aí que html e css apareceu na minha
                                vida, para ser mais preciso durante meu primeiro período na faculdade de matemática, nesse momento
                                eu percebi que matemática por si não seria mais o suficiente então decidir mudar, sair de matemática
                                e mudar para um curso na área de tecnologias.
                        </p>
                        <div>
                            <h2>OQUE SEI</h2>
                        </div>
                        <p >
                            Meus conhecimentos na área de desenvolvimento web são  html,
                            css, javascript, react, sass, git e alguns conhecimentos teóricos, conhecimento básico
                            de edição de imagens e vídeos também podem ser considerados, e o domínio da
                            língua inglesa, poder ser melhor vistos na área do meus <a href='projetos'>projetos</a>. 
                        </p>
                        <div>
                            <h2>FUTURO</h2>
                        </div>
                        <p >
                            Meus planos seriam me forma em ciências da computação e design gráfico, assim eu poderia ter um conhecimento
                            mais profundo dessa área que me apaixonei por.
                        </p>
                        <Rodape classSecundaria="rodapeEU"/>
                    </div>
            </div>
            <div >
                        <img alt='Uma foto minha' src="/imagens/IMG_20210816_094739_016.png"/>
            </div>
            </div>
        )
    }
    
}
export default Corpo2