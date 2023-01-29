import"../../../../style/style.css"
import Rodape from "../../../rodape/rodape"


const Portfolio = () => {


return(
    <div>
    <div className="corpo3">
        <div>
            <h1>Meus projetos tantos de estudos quanto de trabalhos estão a baixo.</h1>
        </div>
        <div>
            <p>
                Alura organo foi meu primeiro projeto de estudo, onde eu pode trabalhar melhor com a questão de componentes, e modificação
                feita pelos inputs, um site onde poderias cadastrar pessoas para uma lista de trabalhadores da Alura, onde escolher imagens,
                cores, texto ou grupo o endivido trabalha.
            </p> 
            <a href="AluraOrgano"><img src='imagens/banner.png' alt='Logo do Organo' /></a>
        </div>    
    </div>
    <Rodape classSecundaria="RodapeProjetos"/>
    </div>
)

}

export default Portfolio