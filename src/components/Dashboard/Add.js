import React, { useState } from 'react';
import Swal from 'sweetalert2';

// const Add = ({ news, setNews, setIsAdding }) => {
const Add = ({ apiNews, setIsAdding }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState("true");
  const [message, setMessage] = useState('');
  // const [date, setDate] = useState(Date.now());
  const [selectedImage, setSelectedImage] = useState();

  
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

  
  //function ini dipanggil ketika file akan diganti/di change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
          
  //function ini dipanggil ketika file akan dihapus
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  const handleAdd = e => {
    e.preventDefault();

    // if (!title || !status || !message || !date || !selectedImage) {
    //   return Swal.fire({
    //     icon: 'error',
    //     title: 'Error!',
    //     text: 'All fields are required.',
    //     showConfirmButton: true,
    //   });
    // }

    if (!title || !status || !message || !selectedImage) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    // const id = news.length + 1;
    // const newNews = {
      // id,
      // title,
      // status,
      // message,
      // date,
      // selectedImage,
    // };

    // news.push(newNews);
    // localStorage.setItem('employees_data', JSON.stringify(news));
    // setNews(news);
    setIsAdding(false);

    apiNews.post('/news', {
      title: title,
      article: message,
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

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
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
          {/* <option placeholder="Status">Status</option>
          <option value="Shared">Shared</option>
          <option value="Not Shared">Not Shared</option> */}
          
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>

        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          type="text"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          style={{"1px solid red" : ".5px solid rgba(128, 128, 128, 0.555)"}}
          cols="100" 
          rows="18"
          placeholder="Tulis berita anda"
        ></textarea>
        {/* <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        /> */}
        {/* <> */}

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
          {/* </> */}
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );

  
};

export default Add;
