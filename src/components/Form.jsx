import React, { useState } from 'react'

const Form = ({addMessage}) => {

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [status,  setStatus] = useState("");
    const [error, setError] = useState(false);

    const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(message.length < 140){
            setError(true);
        }else{
            (author === "" || message === "") ? alert("Harap lengkapi semua bidang") : (
                addMessage({
                id: new Date().getTime(),
                author,
                title,
                message,
                status,
                })) 
                setTitle("")
                setMessage("")
                setStatus("")
                setError(false);

            }
        }

    return (
        <div className="form">
            <h1 style={{textAlign:"center"}}>Add <News></News></h1>
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
                    value={title}
                />


                <textarea 
                    style={{border: error ? "1px solid red" : ".5px solid rgba(128, 128, 128, 0.555)"}}
                    cols="100" 
                    rows="20"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    placeholder="About Place"
                ></textarea>

                <div style={styles.container}>
                <input
                accept="image/*"
                type="file"
                onChange={imageChange}
                />

                {selectedImage && (
                <div style={styles.preview}>
                <img
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
                alt="Thumb"
            />
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove This Image
            </button>
          </div>
        )}
      </div>


                {error && <div style={{textAlign:"center", color:"red"}}>Jumlah karakter dalam pesan Anda harus lebih dari 140 karakter!</div>}
                
                <div className="submit">
                    <input type="submit" value="Send"/>  
                </div>
                
            </form>
        </div>
    )
}
export default Form;
