import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

function Edit({ apiNews, setIsEditing, currData }) {
  const [title, setTitle] = useState(currData.title)
  const [status, setStatus] = useState(currData.status)
  const [article, setArticle] = useState(currData.article)
  const [oldImage, setOldImage] = useState()
  const [selectedImage, setSelectedImage] = useState()
  const [pageStart, setPageStart] = useState(true)
  const [firstFetch, setFirstFetch] = useState(true)

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

    apiNews.put(`/news/${currData.id}`, {
      title,
      article,
      status,
      image: selectedImage
    })

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

  useEffect(() => {
    const fetchNews = async () => {
      const fetchData = await apiNews.get(`/news/${currData.id}`)
      if (fetchData.data.data[0] !== null) {
        setTitle(fetchData.data.data[0].title)
        setStatus(fetchData.data.data[0].status)
        setArticle(fetchData.data.data[0].article)
        setOldImage(`http://172.22.56.135:8000${fetchData.data.data[0].image}`)
      }
    }
    fetchNews()
  }, [apiNews, currData.id, firstFetch])

  return (
    <div className="small-container">
      <form onSubmit={handleEdit}>
        <h1>
          Edit News
        </h1>

        <label htmlFor="title">
          Title
        </label>

        <input
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '80%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
            marginBottom: '40px'
          }}
          type="text"
          value={title} />

        <label htmlFor="status">
          Status
        </label>

        <select
          id="status"
          name="status"
          onChange={(e) => setStatus(e.target.value)}
          style={{
            width: '25%',
            paddingLeft: '8px',
            paddingTop: '6px',
            paddingBottom: '6px',
            paddingRight: '6px',
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
          value={article} />

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
            type="file" />

          {pageStart && (
            <div style={styles.preview}>
              <img
                alt="news pics"
                src={oldImage}
                style={styles.image} />

              <button
                onClick={removePrevImg}
                style={styles.delete} >
                Remove This Image
              </button>
            </div>
          )}

          {selectedImage && (
            <div style={styles.preview}>
              <img
                alt="news pics"
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
              />

              <button
                onClick={removeSelectedImage}
                style={styles.delete} >
                Remove This Image
              </button>
            </div>
          )}
        </div>

        <div style={{ marginTop: '30px' }}>
          <input
            type="submit"
            value="Update" />
          <input
            className="muted-button"
            onClick={() => setIsEditing(false)}
            style={{ marginLeft: '12px' }}
            type="button"
            value="Cancel" />
        </div>
      </form>
    </div>
  )
}

export default Edit
