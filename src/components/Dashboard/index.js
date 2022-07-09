import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { newsData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [news, setNews] = useState(newsData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees_data'));
    if (data !== null && Object.keys(data).length !== 0) setNews(data);
  }, []);

  const apiNews = axios.create({
    baseURL: "http://172.22.56.135:8000/api",
    timeout: 0,
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
  })

  const handleEdit = id => {
    const [Editnews] = news.filter(news => Editnews.id === id);

    setSelectedEmployee(Editnews);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        // const [Editnews] = news.filter(Editnews => Editnews.id === id);

        apiNews.delete(`news/${id}`).then(resp => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
        });

        // Swal.fire({
        //   icon: 'success',
        //   title: 'Deleted!',
        //   text: `${Editnews.title}'s data has been deleted.`,
        //   showConfirmButton: false,
        //   timer: 1500,
        // });

        // const newsCopy = news.filter(Editnews => Editnews.id !== id);
        // localStorage.setItem('employees_data', JSON.stringify(newsCopy));
        // setNews(newsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            apiNews={apiNews}
            // news={news}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          // news={news}
          apiNews={apiNews}
          // setNews={setNews}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          news={news}
          selectedEmployee={selectedEmployee}
          setNews={setNews}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
