import React, { useEffect, useState } from 'react'
// Import Add from './Add';

// Const Table = ({ news, handleEdit, handleDelete }) => {
function Table({ apiNews, setIsEditing, setCurrData, setIsAuthorized }) {
  // Let newsList = [];
  const [withdList = [], withdListHook] = useState()
  const [isUpdated, setIsUpdated] = useState(true)

  const fetchProcess = async () => {
    // try {
    //   const resp = await apiNews.get('/payment')
    //   if (resp.data.data[0] !== null) withdListHook(resp.data.data)
    //   else withdListHook([])
    //   setIsAuthorized(true)
    // } catch (err) {
    //   if (err.request.status === 403) {
    //     setIsAuthorized(false)
    //   }
    // }
    withdListHook([{
      id: 'asdlfk1j23lk4j123asdf',
      placename: 'Ancol',
      reqfund: 100000,
      bankacc: 'asdf09asd90f'
    },{
      id: 'f90g8hjf908g90fb90fg',
      placename: 'TMII',
      reqfund: 200000,
      bankacc: 'as23339asaaf'
    }])
    setIsUpdated(false)
  }

  useEffect(() => {

    fetchProcess()
  }, [apiNews, withdList]
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
              Place Name
            </th>
            <th
              className="text-center"
              colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {withdList.length > 0 ? (
            withdList.map((WithdrawRequest, i) => (
              <tr key={WithdrawRequest.id}>
                <td>
                  {i + 1}
                </td>
                <td>
                  {WithdrawRequest.placename}
                </td>

                <td className="text-right">
                  <button
                    className="button muted-button"
                    onClick={() => {
                      setIsEditing(true)
                      setCurrData(WithdrawRequest)
                    }}>
                    Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                No payment confirmation request
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
