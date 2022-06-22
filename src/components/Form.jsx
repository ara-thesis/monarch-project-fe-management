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
                setStatus("")
                setMessage("")
                setError(false);
            }
        }

    return (
        <div className="form">
            <h1 style={{textAlign:"left", fontWeight:"bold", marginBottom:"20px" }}>Add News</h1>
            <form onSubmit={handleSubmit}>

                <input 
                    type="text" 
                    placeholder="Title" 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    style={{
                        width: "40%",
                        paddingLeft: "8px",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        paddingRight: "6px",
                        marginBottom:"40px",
                    }}
                />
                
                <input 
                    type="text" 
                    placeholder="Status" 
                    onChange={(e) => setStatus(e.target.value)}
                    value={status}
                    style={{
                        width: "30%",
                        paddingLeft: "8px",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                        paddingRight: "6px",
                        marginLeft:"20px",
                    }}
                /> 


                
                
                <textarea 
                    style={{border: error ? "1px solid red" : ".5px solid rgba(128, 128, 128, 0.555)"}}
                    cols="100" 
                    rows="18"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Tulis berita anda"
                ></textarea>
                {error && <div style={{textAlign:"center", color:"red"}}>Jumlah karakter dalam berita anda harus lebih dari 140!</div>}
                
                <div className="submit">
                    <input type="submit" value="Send"/>  
                </div>
                
            </form>
        </div>
    )
} 
export default Form;

