import './user-profile.css'
import Userphoto from "../../img/imagem-pessoa.jpg"

function Userprofile(){
    return (
        <div className='userprofile'>
            <img src={Userphoto} className='userphoto'></img>
            <p>Wade</p>
        </div>
    )
}

export default Userprofile