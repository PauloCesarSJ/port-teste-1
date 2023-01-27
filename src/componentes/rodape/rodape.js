import "../../style/style.css";
import {CgMail} from "react-icons/cg"
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"


const Rodape = (props) =>{

    return(
        <div className={`rodapePrincipal ${props.classSecundaria}`}>
            <a href="mailto:pcesar.sj2004@gmail.com"><CgMail/></a>

            <a href="https://github.com/PauloCesarSJ"><BsGithub/></a>

            <a href="https://www.instagram.com/paulo.cesar.oi/"><BsInstagram/></a>
            
            <a href="https://www.linkedin.com/in/paulo-cesar-4428b8260/"><BsLinkedin/></a>
        </div>
    )
}

export default Rodape