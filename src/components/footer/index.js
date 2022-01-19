import "../footer/styles.css";
import insta from "../../images/instagram.png";
import face from "../../images/facebook.png";
import whats from "../../images/whatsapp.png";
import local from "../../images/location.png"

function Footer() {
  return (
  <>
        <footer className="footer">
            <div className="nome">
                <h2>SilverMotors</h2>
            </div>
            <div className="endereco-completo">
                <img src={local} heigh="25" width="25"/>
                <div className="linhavertical"></div>
                <div className="endereco-texto">
                    <p>Rua Dom João VI, 68</p>
                    <p>Mares-CEP 879123</p>
                </div>
            </div>          
            <div className="icones">
                <a href="*" className='instagram-icon'>
                    <img src={insta} alt="instagram" heigh="32" width="32"/>
                </a> 
                <a href="*" className='facebook-icon'>
                    <img src={face} alt="facebook" heigh="30" width="30" />
                </a>
                <a href="*" className='whatsapp-icon'>
                    <img src={whats} alt="whatsapp" heigh="32" width="32" />
                </a>
            </div>
            <div className="horarios">
                <p>Horários: Seg a Sexta 8h às 18h/Sábados 8h às 13h</p>
            </div>
        </footer>
  </>
  
    );
}

export default Footer;