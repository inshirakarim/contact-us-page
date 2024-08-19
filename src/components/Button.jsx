import './button.css'



function Button(props) {
  return (
    <>
    <button className={props.isOutline ?'outline_button':'primary_button'}>
    {props.icon}
    {props.text}
        
    </button>
    </>
  )
}

export default Button