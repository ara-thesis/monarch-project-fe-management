import React, { useState } from 'react'

const Form = ({addMessage}) => {

    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState(Date.now());
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message.length < 140){
            setError(true);
        }else{
            (author === "" || message === "") ? alert("Harap lengkapi semua bidang") : (
                addMessage({
                id: new Date().getTime(),
                author,
                message,
                date
                })) 
                setAuthor("")
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
                    placeholder="Author" 
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                
                <textarea 
                    style={{border: error ? "1px solid red" : ".5px solid rgba(128, 128, 128, 0.555)"}}
                    cols="100" 
                    rows="20"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="Tulis Berita yang ingin anda"
                ></textarea>
                {error && <div style={{textAlign:"center", color:"red"}}>Jumlah karakter dalam pesan Anda harus lebih dari 140 karakter!</div>}
                
                <div className="submit">
                    <input type="submit" value="Send"/>  
                </div>
                
            </form>
        </div>
    )
} 
export default Form;
