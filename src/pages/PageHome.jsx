
import Img from './engre.jpeg';
import './myhome.css';
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <>
        <br/>
        <div className="containar">
            <div className="esquerda">
            <img id='img-home' src={Img} alt="" srcset="" />
            <Link to="/ebook">

            <button id='controlar' className='mobile'>Controlar</button>
            </Link>


            </div>
            <div className="dir">
                <h1 id='h2'>E-BOOK</h1>
                
                <p id='p'>Gerencie e Controle seus Ebook's e Usuários!</p>
                <br/>
                <Link to="/ebook">
            <button id='controlar' className='desktop'>Controlar</button>
            </Link>
            </div>

            </div>
        </>
    )
}
export default HomePage;
