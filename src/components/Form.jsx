import React, { useState } from 'react'

const Form = ({addMessage}) => {

    const [title, setTitle] = useState("");
    const [status,  setStatus] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState(Date.now());
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message.length < 140){
            setError(true);
        }else{
            (title === "" || status == ""|| message === "") ? alert("Veuillez renseigner tous les champs") : (
                addMessage({
                id: new Date().getTime(),
                title,
                status,
                message,
                date
                })) 
                setTitle("")
                setStatus("Status = ")
                setMessage("")
                setError(false);
            }
        }

    return (
        <div className="form">
            <h1 style={{textAlign:"center"}}>New</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                                <input 
                    type="text" 
                    placeholder="Status" 
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                /> 
                
                <textarea 
                    style={{border: error ? "1px solid red" : ".5px solid rgba(128, 128, 128, 0.555)"}}
                    cols="100" 
                    rows="18"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Ecrire votre message"
                ></textarea>
                {error && <div style={{textAlign:"center", color:"red"}}>Le nombre de caractere de votre message doit superieur a 140 !</div>}
                
                <div className="submit">
                    <input type="submit" value="Send"/>  
                </div>
                
            </form>
        </div>
    )
} 
export default Form;

