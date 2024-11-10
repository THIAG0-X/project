import './user-profile.css'
import Menu from "../../img/menu.png"
import Userphoto from "../../img/imagem-pessoa.jpg"
function Userprofile2(){
    return (
        <div className='userprofile'>
            <img src={Userphoto} className='userphoto'></img>
            <p>Wade</p>
            <img src={Menu} />
        </div>
    )
}

export default Userprofile2