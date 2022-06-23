import React, { useState } from 'react'
import Form from '../components/Form';
import { Link } from "react-router-dom";
import { Button} from 'react-bootstrap';

const NewsAdd = () =>{

    const [data, setData] = useState([]);
    const handleContent = (article) =>{
        const newData = [...data];
        newData.push(article)

        setData(newData)
    }

    const handleDelete = (id) =>{
        const newDelete = [...data];
        const index = newDelete.findIndex((i) => i.id === id);

        newDelete.splice(index, 1);
        // console.log(index)
        setData(newDelete);
    }
    console.log(data)
    return (
        <div>
            <Form addMessage={handleContent}/>

            <div style={{ textAlign:'left' ,fontWeight:"bold" }}>
            <h4>Berita anda telah ditambahkan! </h4>

            <Link to="/News">
  <Button variant="primary" size="sm" textAlign="right">
    Klik disini untuk kembali
  </Button>
</Link>
            </div>


        </div>
    )
}

export default NewsAdd;