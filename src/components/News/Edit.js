import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ apiNews, setIsEditing, currData }) => {
  const [title, setTitle] = useState(currData.title);
  const [status, setStatus] = useState(currData.status);
  const [article, setArticle] = useState(currData.article);
  const [oldImage, setOldImage] = useState(currData.image);
  const [selectedImage, setSelectedImage] = useState();
  const [pageStart, setPageStart] = useState(true);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };

  // const fetchProcess = async () => {
  //   const respRaw = await apiNews.get(`/news/${currId}`);
  //   const respData = respRaw.data.data[0];
  //   setTitle(respData.title);
  //   setArticle(respData.article);
  //   setStatus(respData.status);
  //   setOldImage(`http://172.22.56.135:8000${respData.image}`);
  //   console.log("test");
  // };
  // if (!isBegin){
  //   isBegin = true;
  //   fetchProcess();
  // }

  //function ini dipanggil ketika file akan diganti/di change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      setPageStart(false);
    }
  };
          
  //function ini dipanggil ketika file akan dihapus
  const removeSelectedImage = () => {
    setSelectedImage();
    setPageStart(false);
  };

  const handleEdit = e => {
    e.preventDefault();

    // if (!title || !status || !article || !selectedImage) {
    //   return Swal.fire({
    //     icon: 'error',
    //     title: 'Error!',
    //     text: 'All fields are required.',
    //     showConfirmButton: true,
    //   });
    // }

    setIsEditing(false);

    // console.log(title+article+status);
    
    apiNews.put(`/news/${currData.id}`, {
      title: title,
      article: article,
      status: status,
      image: selectedImage
    }, {
      'Content-Type': 'multipart/form-data'
    })

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${title} ${status}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const removePrevImg = () => {
    setOldImage();
  }

  return (
    <div className="small-container">
      <form onSubmit={handleEdit}>
        <h1>Edit News</h1>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{
            width: "100%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            paddingRight: "6px",
            marginBottom:"40px",
        }}
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          type="text"
          name="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          style={{
            width: "50%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
            paddingRight: "6px",
            marginLeft:"20px",
          }}
        >
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          type="text"
          name="message"
          value={article}
          onChange={e => setArticle(e.target.value)}
          style={{"1px solid red" : ".5px solid rgba(128, 128, 128, 0.555)"}}
          cols="100" 
          rows="18"
          placeholder="Tulis berita anda"
        ></textarea>

        <div style={styles.container}>
          <input
            accept="image/*"
            type="file"
            onChange={imageChange}
            style={{
              width: "30%",
              paddingLeft: "8px",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingRight: "6px",
              marginTop:"20px",
            }}
          />

          {pageStart && (
            <div style={styles.preview}>
              <img
                src={oldImage}
                style={styles.image}
                alt="news pics"
              />
              <button onClick={removePrevImg} style={styles.delete}>
                Remove This Image
              </button>
            </div>
          )}

          {selectedImage && (
            <div style={styles.preview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
                alt="news pics"
              />
              <button onClick={removeSelectedImage} style={styles.delete}>
                Remove This Image
              </button>
            </div>
          )}
        </div>
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );

  
};

export default Edit;
