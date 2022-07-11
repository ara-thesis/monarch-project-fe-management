import React, { useEffect, useState } from 'react'
// Import Add from './Add';

// Const Table = ({ news, handleEdit, handleDelete }) => {
function Table({ apiNews, setIsEditing, handleDelete, setCurrData }) {
  // Let newsList = [];
  const [
    newsList = [],
    newsListHook
  ] = useState()

  useEffect(
    () => {
      const fetchProcess = async () => {
        try {
          const resp = await apiNews.get('/news/list/admin')
          if (resp.data.data[0] !== null) newsListHook(resp.data.data)
          else newsListHook([])
        } catch (err) {
          if (err.request.status === 403) {
            alert('ACCESS UNAUTHORIZED')
          }
        }
      }
      fetchProcess()
    },
    [
      apiNews,
      newsList
    ]
  )

  /*
   * News.forEach((EditNews, i) => {
   *   EditNews.id = i + 1;
   * });
   */

  /*
   * Const formatter = new Intl.NumberFormat('en-US', {
   *   style: 'currency',
   *   currency: 'USD',
   *   minimumFractionDigits: null,
   * });
   */

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>
              No.
            </th>

            <th>
              Title
            </th>

            <th>
              Status
            </th>

            <th
              className="text-center"
              colSpan={2}
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {newsList.length > 0 ? (
            newsList.map((EditNews, i) => (
              <tr key={EditNews.id}>
                <td>
                  {i + 1}
                </td>

                {/* <td>{EditNews.id}</td> */}

                <td>
                  {EditNews.title}
                </td>

                <td>
                  {EditNews.status}
                </td>

                {/* <td>{EditNews.message}</td> */}

                {/* <td>{EditNews.date} </td> */}

                {/* <img id="target" src={Add.state.s}/> */}

                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => {
                      setIsEditing(true)
                      setCurrData(EditNews)
                    }}
                  >
                    Edit
                  </button>
                </td>

                <td className="text-left">
                  <button
                    className="button muted-button"
                    onClick={() => handleDelete(EditNews.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                No News
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
