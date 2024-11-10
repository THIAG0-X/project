import './button.css'

function Btn(props){
    return(
    <button className='button'>{props.children}</button>
    )
}

export default Btn