import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

const News = () =>{

    return(

        <Container>
        <Row>
            <Col>
        <div style={{ textAlign:'center' }}>
            <h1>List News</h1>
        </div>
        <p>
        <Link to="/NewsAdd">
  <Button variant="primary" size="lg">
    Add News
  </Button>
</Link>
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
                        Messi dikabarkan terlihat di lokasi wisata The Great Asia Afrika, dia tampak sedang berlibur dengan keluarganya, yang tanpa diduga Messi pun sangat lihai dalam menggunakan bahasa Sunda. Setelah berbincang dengan Messi diketahui Messi rupanya akang-akang asli Bandung dengan nama Messi Tatang Jangkung.
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