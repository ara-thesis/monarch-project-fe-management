/* eslint-disable no-magic-numbers */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Swal from 'sweetalert2'

function Add({ apiNews, setIsAdding }) {
  const [
    title,
    setTitle
  ] = useState('')
  const [
    status,
    setStatus
  ] = useState('true')
  const [
    detail,
    setDetail
  ] = useState('')
  const [
    selectedImage,
    setSelectedImage
  ] = useState()

  const styles = {
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 50
    },
    delete: {
      background: 'red',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: 15
    },
    image: {
      maxHeight: 320,
      maxWidth: '100%'
    },
    preview: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 50
    }
  }

  //  Function ini dipanggil ketika file akan diganti/di change
  const imageChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0])
    }
  }

  //  Function ini dipanggil ketika file akan dihapus
  const removeSelectedImage = () => {
    setSelectedImage()
  }

  // eslint-disable-next-line consistent-return
  const handleAdd = (event) => {
    event.preventDefault()

    if (!title || !status || !detail || !selectedImage) {
      return Swal.fire({
        icon: 'error',
        showConfirmButton: true,
        text: 'All fields are required.',
        title: 'Error!'
      })
    }

    setIsAdding(false)

    apiNews.post(
      '/banner',
      {
        detail,
        image: selectedImage,
        status,
        title
      },
      {
        'Content-Type': 'multipart/form-data'
      }
    )

    Swal.fire({
      icon: 'success',
      showConfirmButton: false,
      text: `${title} ${status}'s data has been Added.`,
      timer: 1500,
      title: 'Added!'
    })
  }

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>
          Add Banner
        </h1>

        <label htmlFor="title">
          Title
        </label>

        <input
          id="title"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          style={{
            marginBottom: '40px',
            paddingBottom: '6px',
            paddingLeft: '8px',
            paddingRight: '6px',
            paddingTop: '6px',
            width: '100%'
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
          onChange={(event) => setStatus(event.target.value)}
          style={{
            marginLeft: '20px',
            paddingBottom: '6px',
            paddingLeft: '8px',
            paddingRight: '6px',
            paddingTop: '6px',
            width: '50%'
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
          onChange={(event) => setDetail(event.target.value)}
          placeholder="Tulis deskripsi banner anda"
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
              marginTop: '20px',
              paddingBottom: '6px',
              paddingLeft: '8px',
              paddingRight: '6px',
              paddingTop: '6px',
              width: '30%'
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
