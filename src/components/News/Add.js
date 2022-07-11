import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Add({ apiNews, setIsAdding }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('true')
  const [article, setArticle] = useState('')
  const [selectedImage, setSelectedImage] = useState()

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50
    },
    preview: {
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column'
    },
    image: { maxWidth: '100%', maxHeight: 320 },
    delete: {
      cursor: 'pointer',
      padding: 15,
      background: 'red',
      color: 'white',
      border: 'none'
    }
  }

  //  Function ini dipanggil ketika file akan diganti/di change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
    }
  }

  //  Function ini dipanggil ketika file akan dihapus
  const removeSelectedImage = () => {
    setSelectedImage()
  }

  const handleAdd = (e) => {
    e.preventDefault()

    if (!title || !status || !article || !selectedImage) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
      })
    }

    setIsAdding(false)

    apiNews.post(
      '/news',
      {
        title,
        article,
        status,
        image: selectedImage
      },
      {
        'Content-Type': 'multipart/form-data'
      }
    )

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${title} ${status}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="small-container">
      <h3>
        Add News
      </h3>
      <form onSubmit={handleAdd}>

        <label htmlFor="title">
          Title
        </label>

        <input
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
            marginBottom: '40px'
          }}
          type="text"
          value={title}
        />

        <label htmlFor="status">
          Status
        </label>

        <select
          id="status"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          style={{
            width: '50%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
            marginLeft: '20px'
          }}
          type="text"
          value={status}>
          <option value>
            Active
          </option>

          <option value={false}>
            Inactive
          </option>
        </select>

        <label htmlFor="article">
          Article
        </label>

        <textarea
          cols="100"
          id="article"
          name="article"
          onChange={(e) => setArticle(e.target.value)}
          placeholder="Tulis berita anda"
          rows="18"
          style={{ '1px solid red': '.5px solid rgba(128, 128, 128, 0.555)' }}
          type="text"
          value={article}
        />

        <div style={styles.container}>
          <input
            accept="image/*"
            onChange={imageChange}
            style={{
              width: '30%',
              paddingLeft: '8px',
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingRight: '6px',
              marginTop: '20px'
            }}
            type="file"
          />

          {selectedImage
            ? <div style={styles.preview}>
              <img
                alt="Thumb"
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
              />

              <button
                onClick={removeSelectedImage}
                style={styles.delete}
              >
                Remove This Image
              </button>
            </div>
            : null}
        </div>

        <div style={{ marginTop: '30px' }}>
          <input
            type="submit"
            value="Add"
          />

          <input
            className="muted-button"
            onClick={() => setIsAdding(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  )
}

export default Add
