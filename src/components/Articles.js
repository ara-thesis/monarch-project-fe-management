import React, { useState } from 'react'

const Articles = ({article, deleteArticle}) => {

    const [isEditing, setIsEditing] = useState(false);

    const getDate = () => {
        let newDate = new Date().toLocaleDateString("fr-FR",{
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        return newDate;
    }

    const handleClickValid = () =>{
        setIsEditing(false);
    }

    return (
        <div>
            <div className="articles" style={{background: isEditing ? "rgba(127, 255, 212, 0.233)" : "white"}}>
                <div className="AuthorDate">
                    <div style={{fontWeight:"bold"}}>{article.title}</div>

                    <div style={{fontFamily:"sans-serif"}}>Status : {article.status}</div>

                    <div>Berita Diposting pada {getDate(article.date)}</div>
                    
                </div>
                {isEditing  ? (<textarea autoFocus defaultValue={article.message} className="textarea"></textarea>) 
                    : (<p className="text">{article.message}</p>)
                }

                    {/* <div> <img>{article.selectedImage}</img></div> */}
                <div className="button">
                    {isEditing ? <button onClick={() => handleClickValid(article.id)}>Valider</button> :
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    }
                    <button 
                        onClick={() => {
                            if(window.confirm("Apakah anda yakin berita ini akan dihapus? ")){
                                deleteArticle(article.id)
                            }
                        }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Articles;