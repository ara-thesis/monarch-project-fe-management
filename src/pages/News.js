import React, { useState } from 'react'
import { Link } from "react-router-dom";
import NewsAdd from './NewsAdd';
import Articles from "../components/Articles"
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

const News = () =>{

    const handleDelete = (id) =>{
        const newDelete = [...NewsAdd.data];
        const index = newDelete.findIndex((i) => i.id === id);

        newDelete.splice(index, 1);
        // console.log(index)
        NewsAdd.setData(newDelete);
    }

    console.log(NewsAdd.data)

    return(

        <Container>
        <Row>
            <Col>
        <div style={{ textAlign:'left' ,fontWeight:"bold" }}>
            <h1>News Manager</h1>

            <Link to="/NewsAdd">
  <Button variant="primary" size="lg" textAlign="right">
    Add News
  </Button>
</Link>

            {/* return datanya dari news add */}
            {/* {NewsAdd.data
                .sort((a,b) => b.id - a.id)
                .map((article) => (
                <Articles key={article.id} article={article} deleteArticle={handleDelete}/>
            ))} */}
{/* masih error diatas gatau kenapa */}

        </div>
        <p>
        </p>
        <br />
        {/* <Button onClick={getNews}>Click to fetch News</Button> */}
        <div style={{ textAlign:'left'}}>
        <br /><br />
        <Row>            
                    <Card style={{width:'78rem'}}>
                        <Card.Header>The Great Asia Afrika</Card.Header>
                        <Card.Body>
                        <Card.Title>Messi liburan ke Bandung</Card.Title>
                        <Card.Text>
                       
                        </Card.Text>
                        <Button variant="primary">Baca selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Row>
                <br />
                <Row>
                    <Card style={{width:'78rem'}}>
                        <Card.Header>Pantai pasir putih</Card.Header>
                        <Card.Body>
                        <Card.Title>Pasir di pantai pasir putih berubah menjadi merah ?</Card.Title>
                        <Card.Text>
                        Pada hari senin kemarin ditemukan sesuatu yang menggemparkan yaitu berubahnya warna pantai pasir putih menjadi merah, setelah ditelusuri..
                        </Card.Text>
                        <Button variant="primary">Baca selengkapnya</Button>
                        </Card.Body>
                    </Card>
                </Row>
        </div>
        </Col>
        </Row>
        </Container>
        
    )
}

export default News;