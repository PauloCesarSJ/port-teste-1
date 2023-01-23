import "../../../../style/style.css"
import { ContactUs } from "./enviarGmail/enviarGmail"
import Rodape from "../../../rodape/rodape"


const Corpo4 =() => {

    return(
        <div className="corpo4">
             <div>
                <h1>CONTATO</h1>
            </div>
            <div>
                <ContactUs/>
            </div>
            <Rodape classSecundaria="rodapeContato"/>          
        </div>
    )
}

export default Corpo4