import './contactform.css'
import Button from './Button'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
function ContactForm() {
    const [name,setName]= useState();
    const [email,setEmail]= useState();
    const [text,setText]= useState();
    
  
    const onSubmit = (event) => {
        event.preventDefault();
       setName(event.target[0].value);
       setEmail(event.target[1].value);
       setText(event.target[2].value);
    }
  return (
    <div className='containerbox'>
    <div className='containerform'>
    <div className='buttons'>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize={24} />}></Button>
        <Button text="VIA CALL" icon={<IoCall fontSize={24} />}></Button>
        </div>
        <Button isOutline={true} text="VIA EMAIIL" icon={<MdEmail fontSize={24} />}></Button>
        <form onSubmit={onSubmit}>
            <div className="form-name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            </div>
            <div className="form-name">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            </div>
            <div className="form-name">
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
            </div>
            <div
            style={{
              display: "flex",
              justifyContent:"end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          {name+"   "+email+"   "+text}
        </form>
    </div>
    <div className='containerimage'>
        <img src='/images/pic.svg' alt='image'></img>
    </div>
    </div>
  )
}

export default ContactForm