import React from 'react';
import Add from './Add';

const Table = ({ news, handleEdit, handleDelete }) => {
  news.forEach((EditNews, i) => {
    EditNews.id = i + 1;
  });

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
            <th>News</th>
            <th>Date</th>
            <th>Image</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {news.length > 0 ? (
            news.map((EditNews, i) => (
              <tr key={EditNews.id}>
                <td>{i + 1}</td>
                <td>{EditNews.title}</td>
                <td>{EditNews.status}</td>
                <td>{EditNews.message}</td>
                <td>{EditNews.date} </td>
                {/* <img id="target" src={Add.state.s}/> */}
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(EditNews.id)}
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
