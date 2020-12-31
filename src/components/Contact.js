import React, {useState} from 'react'

const Contact = () => {
    const [formField, setFormField] = useState({
        name:'',
        email:'',
        message:''
    })
    return(
        <>
         <h1 class="title">Contact us</h1>
         <form>
             <label>
                 <input placeholder="Name"></input>             
             </label> <br/>

             <label>
                 <input placeholder="Email"></input>             
             </label><br/>

             <label>
                 <textarea placeholder="Message"></textarea>             
             </label><br/>
             
             <button>Send</button>
         </form>
         
        </>
    )
}

export default Contact