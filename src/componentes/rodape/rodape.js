import "../../style/style.css";
import {CgMail} from "react-icons/cg"
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"


const Rodape = (props) =>{

    return(
        <div className={`rodapePrincipal ${props.classSecundaria}`}>
            <a href="mailto:pcesar.sj2004@gmail.com"><CgMail size={45}/></a>

            <a href="https://github.com/PauloCesarSJ"><BsGithub size={40}/></a>

            <a href="https://www.instagram.com/paulo.cesar.oi/"><BsInstagram size={40}/></a>
            
            <a href="https://www.linkedin.com/in/paulo-cesar-4428b8260/"><BsLinkedin size={40}/></a>
        </div>
    )
}

export default Rodape