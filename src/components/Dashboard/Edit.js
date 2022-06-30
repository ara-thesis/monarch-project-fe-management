import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ news, selectedEmployee, setNews, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [title, setTitle] = useState(selectedEmployee.title);
  const [status, setStatus] = useState(selectedEmployee.status);
  const [message, setMessage] = useState(selectedEmployee.message);
  const [date, setDate] = useState(selectedEmployee.date);
  const [selectedImage, setSelectedImage] = useState(selectedEmployee.selectedImage);

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

  const handleUpdate = e => {
    e.preventDefault();

    if (!title || !status || !message || !date || !selectedImage) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const Editnews  = {
      //employee
      id,
      title,
      status,
      message,
      date,
      selectedImage,
    };

    for (let i = 0; i < news.length; i++) {
      if (news[i].id === id) {
        news.splice(i, 1, Editnews);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(news));
    setNews(news);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${Editnews.title}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
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
          <option value="select">Status</option>
          <option value="Java">Available</option>
          <option value="C++">Not Available</option>

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
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />

<>


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
</>
        </div>
      </form>
    </div>
  );
};

export default Edit;
