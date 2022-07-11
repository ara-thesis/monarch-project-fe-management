import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Edit({ apiNews, setIsEditing, currData }) {
  const [
    title,
    setTitle
  ] = useState(currData.title)
  const [
    status,
    setStatus
  ] = useState(currData.status)
  const [
    detail,
    setDetail
  ] = useState(currData.article)
  const [
    oldImage,
    setOldImage
  ] = useState(currData.image)
  const [
    selectedImage,
    setSelectedImage
  ] = useState()
  const [
    pageStart,
    setPageStart
  ] = useState(true)

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

  // Function ini dipanggil ketika file akan diganti/di change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
      setPageStart(false)
    }
  }

  // Function ini dipanggil ketika file akan dihapus
  const removeSelectedImage = () => {
    setSelectedImage()
    setPageStart(false)
  }

  const handleEdit = (e) => {
    e.preventDefault()

    setIsEditing(false)

    apiNews.put(
      `/banner/${currData.id}`,
      {
        title,
        detail,
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

  const removePrevImg = () => {
    setOldImage()
  }

  return (
    <div className="small-container">
      <form onSubmit={handleEdit}>
        <h1>
          Edit Banner
        </h1>

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
          value={status}
        >
          <option value>
            Active
          </option>

          <option value={false}>
            Inactive
          </option>
        </select>

        <label htmlFor="description">
          Description
        </label>

        <textarea
          cols="100"
          id="description"
          name="description"
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Tulis berita anda"
          rows="18"
          style={{ '1px solid red': '.5px solid rgba(128, 128, 128, 0.555)' }}
          type="text"
          value={detail}
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

          {pageStart
            ? <div style={styles.preview}>
              <img
                alt="news pics"
                src={oldImage}
                style={styles.image}
              />

              <button
                onClick={removePrevImg}
                style={styles.delete}
              >
                Remove This Image
              </button>
            </div>
            : null}

          {selectedImage
            ? <div style={styles.preview}>
              <img
                alt="news pics"
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
            value="Update"
          />

          <input
            className="muted-button"
            onClick={() => setIsEditing(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  )
}

export default Edit
