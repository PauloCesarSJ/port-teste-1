import '../../../../style/style.css';
import Rodape from '../../../rodape/rodape';

const Corpo2 = () => {


    return (
        <div className="quadroSobreMIm">
           <div>
                <div>
                    <p>
                        QUEM SOU <br/> <br/> 
                            Ola eu sou Paulo Cesar, tenho 18 anos, sou um jovem, web developer júnior.
                            Sou apaixonado por tecnologia. Minha história com tecnologia começa aos meus 14 anos
                            onde meu professo de física me apresentando um Arduíno, usando c++ para fazer o básico,
                            ali eu me apaixonei pela área da tecnologia, passei alguns anos pulando de língua em língua
                            ate encontrar uma que permitisse a junção de tecnologia e artes foi aí que html e css apareceu na minha
                            vida, para ser mais preciso durante meu primeiro período na faculdade de matemática, nesse momento
                            eu percebi que matemática por si não seria mais o suficiente então decidir mudar, sair de matemática
                            e mudar para um curso na área de tecnologias.
                    </p>
                    <p>
                        Meus conhecimentos na área de desenvolvimento web são  html,
                        css, javascript, react, sass, git e alguns conhecimentos teóricos, conhecimento básico
                        de edição de imagens e vídeos também podem ser considerados, e o domínio da
                        língua inglesa, poder ser melhor vistos na área do meu <a href='projetos'>projetos</a>. 
                    </p>
                    <p>
                        Meus planos seriam me forma em sistema da informação e design gráfico, assim eu poderia ter um conhecimento
                        mais profundo dessa área que me apaixonei por.
                    </p>
                </div>
           </div>
           <div >
                    <img alt='Uma foto minha' src="/imagens/IMG_20210816_094739_016.png"/>
           </div>
           <Rodape classSecundaria="rodapeEU"/>
        </div>
    )
}

export default Corpo2






















