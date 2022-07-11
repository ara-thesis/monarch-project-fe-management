import React, { useEffect, useState } from 'react'
// Import Add from './Add';

// Const Table = ({ news, handleEdit, handleDelete }) => {
function Table({ apiNews, setIsEditing, handleDelete, setCurrData }) {
  // Let newsList = [];
  const [
    bannerList = [],
    newsListHook
  ] = useState()

  useEffect(
    () => {
      const fetchProcess = async () => {
        const resp = await apiNews.get('/banner')
        if (resp.data.data[0] !== null) newsListHook(resp.data.data)
        else newsListHook([])
      }
      fetchProcess()
    },
    [
      apiNews,
      bannerList
    ]
  )

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
          {(bannerList.length > 0)
            ? (
              bannerList.map((EditBanner, i) => (
                <tr key={EditBanner.id}>
                  <td>
                    {i + 1}
                  </td>

                  <td>
                    {EditBanner.title}
                  </td>

                  <td>
                    {EditBanner.status}
                  </td>

                  <td className="text-right">
                    <button
                      className="button muted-button"
                      onClick={() => {
                        setIsEditing(true)
                        setCurrData(EditBanner)
                      }}
                    >
                      Edit
                    </button>
                  </td>

                  <td className="text-left">
                    <button
                      className="button muted-button"
                      onClick={() => handleDelete(EditBanner.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )
            : (
              <tr>
                <td colSpan={7}>
                  No Banner
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
