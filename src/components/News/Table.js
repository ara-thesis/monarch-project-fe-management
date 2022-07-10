import React, { useEffect, useState } from 'react';
// import Add from './Add';


// const Table = ({ news, handleEdit, handleDelete }) => {
const Table = ({ apiNews, setIsEditing, handleDelete, setCurrData }) => {

  // let newsList = [];
  const [newsList = [], newsListHook] = useState();

  useEffect(() => {

    const fetchProcess = async () => {
      const resp = await apiNews.get('/news/list/admin');
      newsListHook(() => resp.data.data);
    };
    fetchProcess();
    
  }, [apiNews, newsList]);

  // news.forEach((EditNews, i) => {
  //   EditNews.id = i + 1;
  // });

  // const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  //   minimumFractionDigits: null,
  // });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Status</th>
            {/* <th>News</th> */}
            {/* <th>Date</th> */}
            {/* <th>Image</th> */}
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {newsList.length > 0 ? (
            newsList.map((EditNews, i) => (
              <tr key={EditNews.id}>
                <td>{i + 1}</td>
                {/* <td>{EditNews.id}</td> */}
                <td>{EditNews.title}</td>
                <td>{EditNews.status}</td>
                {/* <td>{EditNews.message}</td> */}
                {/* <td>{EditNews.date} </td> */}
                {/* <img id="target" src={Add.state.s}/> */}
                <td className="text-right">
                  <button
                    onClick={() => {
                      setIsEditing(true);
                      setCurrData(EditNews)
                    }}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(EditNews.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No News</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
